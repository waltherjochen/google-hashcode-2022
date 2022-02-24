import {Context} from "./Context";
import {Output} from "./Output";
import {OutputAssignment} from "./OutputAssignment";
import {Assingment} from "./Assingment";
import {Contributor} from "./Contributor";

export function determineOutput(context: Context): Output {
    const output: Output = new Output();

    const assignments: Assingment[] = [];

    for (let project of context.projects) {
        const contributors: Contributor[] = context.contributors.filter(contributor => {
            const skill = project.skills.filter(s => s.name == contributor.skill.name);

            if (skill != null && skill.length === 1) {
                return contributor.skill.level >= skill[0].level;
            }
            return false;
        });

        const assignment: Assingment = {
            projectName: project.name,
            contributors
        }

        assignments.push(assignment);
    }

    const outputAssignment: OutputAssignment = {
        assignments
    };

    output.addOutput(outputAssignment);

    return output;
}
