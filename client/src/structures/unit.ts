import { AgeEnum } from "../enum/ageEnum";
import { ResourceEnum } from "../enum/resourcesEnum";
import { Upgrade } from "./upgrade";

export interface BaseUnit {
    name: string;
    ageRequirement: AgeEnum;
    cost: {
        type: ResourceEnum;
        amount: number;
    }[];
    hp: number;
    queueTime: number;
    upgrades: [Upgrade];
    level: number;
    baseDamage: number;
    counterDamage: {
        unit: BaseUnit;
        damage: number;
    }[];
    range: number;
    speed: number;
}