import fs from 'fs';
import path from 'path';
import {Output} from './Output';

export function writeOutput(fileName: string, output: Output): void {
    const content: string = output.toString();
    const filePath: string = path.join('output', fileName);

    fs.writeFileSync(filePath, content, {encoding: 'utf8'});
}
