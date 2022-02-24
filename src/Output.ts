import {OutputAssignment} from "./OutputAssignment";

export class Output {

    private outputAssignment: OutputAssignment;

    public addOutput(output: OutputAssignment): void {
        this.outputAssignment = output;
    }

    public toString(): string {
        const lines: string[] = [`${this.outputAssignment.assignments.length}`];

        for (const assignment of this.outputAssignment.assignments) {
            lines.push(`${assignment.projectName}`);
            lines.push(`${assignment.contributors.map(contributor => contributor.name).join(' ')}`);
        }

        return lines.join('\n');
    }
}
