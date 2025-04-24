import { AgeEnum } from "../enum/ageEnum";
import { ResourceEnum } from "../enum/resourcesEnum";
import { CounterDamage } from "./counterDamage";
import { Upgrade } from "./upgrade";

export interface BaseUnit {
    name: string;
    ageRequirement: AgeEnum | null;
    cost: {
        type: ResourceEnum;
        amount: number;
    }[];
    hp: number;
    queueTime: number;
    upgrade: Upgrade | null;
    level: number;
    baseDamage: number;
    structureDamage: number;
    counterDamage: CounterDamage | null;
    range: number;
    speed: number;
}