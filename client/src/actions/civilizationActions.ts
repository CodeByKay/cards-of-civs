import { Action } from "../interfaces/action.js";
import { ProductionBuilding } from "../interfaces/production.js";
import { Cost } from "../interfaces/cost.js";

// Age Up
// Generate Villagers
// Build Production Buildings
// Upgrade Production
// Build Military Buildings
// Build Walls

export class CivilizationAction implements Action {
    description: string;
    totalTime: number;
    remainingTime: number;
    originBuilding: ProductionBuilding;
    cost: Cost;

    constructor(description: string, totalTime: number, originBuilding: ProductionBuilding, cost: Cost) {
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