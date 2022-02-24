import {Context} from "./Context";
import {Output} from "./Output";
import {OutputAssignment} from "./OutputAssignment";
import {Assingment} from "./Assingment";
import {Contributor} from "./Contributor";

export function determineOutput(context: Context): Output {
    const output: Output = new Output();

    const assignments: Assingment[] = [];

    for (let project of context.projects) {
        let contributors: Contributor[] = [];

        for (const skill of project.skills) {
            const filteredContributors = context.contributors.filter(contributor => {
                const contributorsAlreadyAdded = contributors.map(contributor => contributor.name);
                return skill.name == contributor.skill.name && contributor.skill.level >= skill.level && !contributorsAlreadyAdded.includes(contributor.name);
            });

            if (filteredContributors.length == 1) {
                contributors.push(filteredContributors[0]);
            } else {
                break;
            }
        }

        if (contributors.length == project.roles) {
            const assignment: Assingment = {
                projectName: project.name,
                contributors
            }

            assignments.push(assignment);
        }
    }

    const outputAssignment: OutputAssignment = {
        assignments
    };

    output.addOutput(outputAssignment);

    return output;
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
