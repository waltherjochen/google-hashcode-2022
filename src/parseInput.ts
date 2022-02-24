import fs from 'fs';
import path from 'path';
import {Context} from "./Context";
import {Contributor} from "./Contributor";
import {Project} from "./Project";
import {Skill} from "./Skill";

export function parseInput(fileName: string): Context {
    const filePath: string = path.join('input', fileName);
    const content: string = fs.readFileSync(filePath, {encoding: 'utf8'});
    const [...lines] = content.split('\n');

    const firstLine = lines[0].split(' ');
    const maxContributors: number = Number(firstLine[0]);
    const maxProjects: number = Number(firstLine[0]);

    const contributors: Contributor[] = [];
    const projects: Project[] = [];

    let lineNumber = 1;

    for (let i = 0; i < maxContributors; i++) {
        const line = lines[lineNumber].split(' ');
        const skillLine = lines[lineNumber + 1].split(' ');

        const skill: Skill = {
            name: skillLine[0],
            skillLevel: Number(skillLine[1]),
        };

        const contributor: Contributor = {
            name: line[0],
            numSkills: Number(line[1]),
            skill
        };
        contributors.push(contributor);

        lineNumber += 2;
    }

    for (let i = 0; i < maxProjects; i++) {
        const line = lines[i].split(' ');

        const roles = Number(line[4]);

        const skills: Skill[] = [];

        for (let j = i; j < i + roles; j++) {
            const skillLine = lines[j].split(' ');

            const skill: Skill = {
                name: skillLine[0],
                skillLevel: Number(skillLine[1]),
            };

            skills.push(skill);
        }

        const project: Project = {
            name: line[0],
            days: Number(line[1]),
            score: Number(line[2]),
            bestBefore: Number(line[3]),
            roles,
            skills: skills,
        };

        projects.push(project);

        lineNumber += roles;
    }

    return new Context(
        contributors,
        projects
    );
}
