import { MilitaryAction } from "../actions/militaryActions";

export class MilitaryQueue {
    queue: MilitaryAction[];

    constructor() {
        this.queue = [];
    }
}