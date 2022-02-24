import {Skill} from "./Skill";

export class Project {

    constructor(
        public name: string,
        public days: number,
        public score: number,
        public bestBefore: number,
        public roles: number,
        public skills: Skill[],
    ) {
    }

}
