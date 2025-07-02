import { MilitaryAction } from "../actions/militaryActions.js";

export class MilitaryQueue {
    queue: MilitaryAction[];

    constructor() {
        this.queue = [];
    }
}