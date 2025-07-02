import { BaseUnit } from "../../interfaces/unit.js";
import { AgeEnum } from "../../enum/ageEnum.js";
import { MilitaryUpgrade } from "../../interfaces/military.js";
import { UnitEnum } from "../../enum/unitEnum.js";

export const CavalryArcher: BaseUnit = {
    name: 'Cavalry Archer',
    unitEnum: UnitEnum.CAVALRY_ARCHER,
    cost: {
        wood: 40,
        gold: 60,
    },
    queueTime: 37,
    range: 3,
    speed: 5,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
}

export const CavalryArcher_2: typeof CavalryArcher = {
    ...CavalryArcher,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 2,
    baseDamage: 7,
    hp: 60,
    upgrade: null,
    counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 4
        }
    ],
}

const CavalryArcherUpgrade_1: MilitaryUpgrade = {
    unit: CavalryArcher_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 900,
        gold: 500,
    },
    queueTime: 55,
}

export const CavalryArcher_1: typeof CavalryArcher = {
    ...CavalryArcher,
    ageRequirement: AgeEnum.CASTLE,
    level: 1,
    baseDamage: 6,
    hp: 50,
    upgrade: CavalryArcherUpgrade_1,
    counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 2
        }
    ],
}