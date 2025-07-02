import { Action } from "../interfaces/action.js";
import { MilitaryBuilding } from "../interfaces/military.js";
import { Cost } from "../interfaces/cost.js";

// Generate Military
// Upgrade Military
// Attack Military
// Attack Military Buildings
// Attack Production Buildings
// Attack Production Zones
// Attack Town Center

export class MilitaryAction implements Action {
    description: string;
    totalTime: number;
    remainingTime: number;
    originBuilding: MilitaryBuilding;
    cost: Cost;

    constructor(description: string, totalTime: number, originBuilding: MilitaryBuilding, cost: Cost) {
        this.description = description;
        this.totalTime = totalTime;
        this.remainingTime = totalTime;
        this.originBuilding = originBuilding;
        this.cost = cost;
    }

    action() {
        return true;
    }
}