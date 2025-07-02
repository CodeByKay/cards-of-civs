import { BaseUnit } from "../../interfaces/unit.js";
import { AgeEnum } from "../../enum/ageEnum.js";
import { MilitaryUpgrade } from "../../interfaces/military.js";
import { UnitEnum } from "../../enum/unitEnum.js";

export const Knight: BaseUnit = {
    name: 'Knight',
    unitEnum: UnitEnum.KNIGHT,
    cost: {
        food: 60,
        gold: 75,
    },
    queueTime: 30,
    range: 1,
    speed: 5,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
}

export const Knight_2: typeof Knight = {
    ...Knight,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 2,
    baseDamage: 12,
    hp: 120,
    upgrade: null,
}

const KnightUpgrade_1: MilitaryUpgrade = {
    unit: Knight_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 300,
        gold: 300,
    },
    queueTime: 80,
}

export const Knight_1: typeof Knight = {
    ...Knight,
    ageRequirement: AgeEnum.CASTLE,
    level: 1,
    baseDamage: 10,
    hp: 100,
    upgrade: KnightUpgrade_1,
}