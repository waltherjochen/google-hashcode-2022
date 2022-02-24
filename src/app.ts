import {parseInput} from './parseInput';
import {Context} from './Context';
import consola from 'consola';
import {Output} from "./Output";
import {determineOutput} from "./determineOutput";

const inputFileNames: string[] = [
    'a_an_example.in.txt',
];

for (const inputFileName of inputFileNames) {
    consola.start(`START: ${inputFileName}`);
    consola.start('Parsing input...');

    const context: Context = parseInput(inputFileName);

    consola.success('Done!');
    consola.start('Thinking...');

    const output: Output = determineOutput(context);
    //
    // consola.success('Done!');
    // consola.start(`Writing output...`);
    //
    // writeOutput(inputFileName, output);

    consola.success('Done!');
    consola.success(`END: ${inputFileName}`);
}
