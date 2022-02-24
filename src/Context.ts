import {Contributor} from "./Contributor";
import {Project} from "./Project";

export class Context {

    constructor(
        public contributors: Contributor[],
        public readonly projects: Project[],
    ) {
    }

}
