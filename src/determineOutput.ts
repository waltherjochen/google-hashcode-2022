import {Context} from "./Context";
import {Output} from "./Output";

export function determineOutput(context: Context): Output {
    const output: Output = new Output();

    // const outputInteractions: OutputIntersection[] = [];
    //
    // context.cars.sort((a, b) => {
    //     if (a.streets < b.streets) {
    //         return -1;
    //     }
    //     return 1;
    // });
    //
    // for (let interaction of context.intersections) {
    //     outputInteractions.push(this.addIntersection(interaction, context.cars, context.maxSeconds));
    // }
    //
    // output.addIntersections(outputInteractions);

    return output;
}
