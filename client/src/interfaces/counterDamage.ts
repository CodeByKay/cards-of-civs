import { BaseBuilding } from "./building";
import { BaseUnit } from "./unit";

export interface CounterDamage {
    counters: {
        unit: BaseUnit | BaseBuilding;
        damage: number;
    }[];    
}