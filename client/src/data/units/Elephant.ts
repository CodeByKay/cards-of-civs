import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";
import { CavalryArcher, Camel, Knight, Scout } from "../indexUnits";

export const Elephant: BaseUnit = {
    name: 'Elephant',
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 100,
        },
        {
            type: ResourceEnum.GOLD,
            amount: 70,
        }
    ],
    queueTime: 24,
    range: 1,
    speed: 2,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: null,
}

export const Elephant_2: typeof Elephant = {
    ...Elephant,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 2,
    baseDamage: 14,
    hp: 300,
    upgrade: null,
    structureDamage: 7,
}

const ElephantUpgrade_1: MilitaryUpgrade = {
    unit: Elephant_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 1100,
        }, {
            type: ResourceEnum.GOLD,
            amount: 700,
        }
    ],
    queueTime: 100,
}

export const Elephant_1: typeof Elephant = {
    ...Elephant,
    ageRequirement: AgeEnum.CASTLE,
    level: 1,
    baseDamage: 12,
    hp: 250,
    upgrade: ElephantUpgrade_1,
    structureDamage: 4,
}