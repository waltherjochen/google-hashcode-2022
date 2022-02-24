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
    const maxProjects: number = Number(firstLine[1]);

    const contributors: Contributor[] = [];
    const projects: Project[] = [];

    let lineNumber = 1;

    for (let i = 0; i < maxContributors; i++) {
        const lineCon = lines[lineNumber].split(' ');
        const skillLine = lines[lineNumber + 1].split(' ');
        const numSkills = Number(lineCon[1]);

        const skill: Skill = {
            name: skillLine[0],
            level: Number(skillLine[1]),
        };

        const contributor: Contributor = {
            name: lineCon[0],
            numSkills,
            skill
        };
        contributors.push(contributor);

        lineNumber += (1 + numSkills);
    }

    for (let i = 0; i < maxProjects; i++) {
        const lineProject = lines[lineNumber].split(' ');

        const roles = Number(lineProject[4]);

        const skills: Skill[] = [];

        for (let j = i; j < i + roles; j++) {
            const skillLine = lines[j].split(' ');

            const skill: Skill = {
                name: skillLine[0],
                level: Number(skillLine[1]),
            };

            skills.push(skill);
        }

        const project: Project = {
            name: lineProject[0],
            days: Number(lineProject[1]),
            score: Number(lineProject[2]),
            bestBefore: Number(lineProject[3]),
            roles,
            skills: skills,
        };

        projects.push(project);

        lineNumber += (1 + roles);
    }

    return new Context(
        contributors,
        projects
    );
}
