import { CivilizationAction } from "../actions/civilizationActions";

export class ActionQueue {
    queue: CivilizationAction[];

    constructor() {
        this.queue = [];
    }
}