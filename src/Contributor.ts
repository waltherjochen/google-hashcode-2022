import {Skill} from "./Skill";

export class Contributor {

    constructor(
        public name: string,
        public numSkills: number,
        public skill: Skill,
        public levelUp?: boolean,
    ) {
    }

}
