import {parseInput} from './parseInput';
import {Context} from './Context';
import consola from 'consola';
import {Output} from "./Output";
import {determineOutput} from "./determineOutput";
import {writeOutput} from "./writeOutput";

const inputFileNames: string[] = [
    'a_an_example.in.txt',
    'b_better_start_small.in.txt',
    'c_collaboration.in.txt',
    'd_dense_schedule.in.txt',
    'e_exceptional_skills.in.txt',
    'f_find_great_mentors.in.txt',
];

for (const inputFileName of inputFileNames) {
    consola.start(`START: ${inputFileName}`);
    consola.start('Parsing input...');

    const context: Context = parseInput(inputFileName);

    consola.success('Done!');
    consola.start('Thinking...');

    const output: Output = determineOutput(context);

    consola.success('Done!');
    consola.start(`Writing output...`);

    writeOutput(inputFileName, output);

    consola.success('Done!');
    consola.success(`END: ${inputFileName}`);
}
