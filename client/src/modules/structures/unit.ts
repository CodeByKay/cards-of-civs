import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";

export interface BaseUnit {
    name: string;
    ageRequirement: AgeEnum;
    cost: {
        type: ResourceEnum;
        amount: number;
    }[];
    hp: number;
    queueTime: number;
    upgrades: [];
    level: number;
    baseDamage: number;
    counterDamage: [];
    range: number;
    speed: number;
}