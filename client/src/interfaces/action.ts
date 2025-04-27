import { Cost } from "./cost";
import { BaseBuilding } from "./building";

export interface Action {
    description: string;
    totalTime: number;
    remainingTime: number;
    originBuilding: BaseBuilding;
    cost: Cost;
    action(): boolean;
}
