import {OutputIntersection} from "./OutputIntersection";

export class Output {

    private intersections: OutputIntersection[] = [];

    public addIntersections(intersections: OutputIntersection[]): void {
        this.intersections = intersections;
    }

    public toString(): string {
        const lines: string[] = [`${this.intersections.length}`];

        // for (const intersection of this.intersections) {
        //     lines.push(`${intersection.id}`);
        //     lines.push(`${intersection.trafficLights.length}`);
        //     for (const trafficLight of intersection.trafficLights) {
        //         lines.push(`${trafficLight.streetName} ${trafficLight.duration}`);
        //     }
        // }

        return lines.join('\n');
    }
}
