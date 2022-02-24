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
                const isSkill = skill.name == contributor.skill.name && !contributorsAlreadyAdded.includes(contributor.name);
                contributor.levelUp = isSkill && contributor.skill.level == skill.level;
                return isSkill && contributor.skill.level >= skill.level;
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

            for (const contributor of contributors) {
                if (contributor.levelUp) {
                    const contextContributors = context.contributors.filter(c => c.name != contributor.name);
                    contributor.skill.level++;
                    contextContributors.push(contributor);
                    context.contributors = contextContributors;
                }
            }
        }
    }

    const outputAssignment: OutputAssignment = {
        assignments
    };

    output.addOutput(outputAssignment);

    return output;
}
