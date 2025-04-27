import { AgeEnum } from "../enum/ageEnum";
import { Cost } from "./cost";
import { CounterDamage } from "./counterDamage";
import { Upgrade } from "./upgrade";

export interface BaseUnit {
    name: string;
    ageRequirement: AgeEnum | null;
    cost: Cost;
    hp: number;
    queueTime: number;
    upgrade: Upgrade | null;
    level: number;
    baseDamage: number;
    structureDamage: number;
    counterDamage: CounterDamage[];
    range: number;
    speed: number;
}

export interface UnitGroup {
    player: number;
    unit: BaseUnit;
    count: number;
}