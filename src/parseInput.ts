import fs from 'fs';
import path from 'path';
import {Context} from "./Context";

export function parseInput(fileName: string): Context {
    const filePath: string = path.join('input', fileName);
    const content: string = fs.readFileSync(filePath, {encoding: 'utf8'});
    const [...lines] = content.split('\n');

    const firstLine = lines[0].split(' ');

    return new Context(
        // intersections,
        // streets,
        // cars,
        // maxSeconds,
        // maxInteractions,
        // score
    );
}
