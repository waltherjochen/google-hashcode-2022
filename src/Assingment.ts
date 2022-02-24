import {Contributor} from "./Contributor";

export class Assingment {

    constructor(
        public readonly projectName: string,
        public readonly contributors: Contributor[],
    ) {
    }

}
