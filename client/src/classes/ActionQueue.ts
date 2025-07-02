import { CivilizationAction } from "../actions/civilizationActions.js";

export class ActionQueue {
    queue: CivilizationAction[];

    constructor() {
        this.queue = [];
    }
}