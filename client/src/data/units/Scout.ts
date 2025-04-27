import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryUpgrade } from "../../interfaces/military";

export const Scout: BaseUnit = {
    name: 'Scout',
    cost: {
        food: 80,
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

export const Scout_3: typeof Scout = {
    ...Scout,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 3,
    baseDamage: 7,
    hp: 75,
    upgrade: null,
}

const ScoutUpgrade_2: MilitaryUpgrade = {
    unit: Scout_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 500,
        gold: 600,
    },
    queueTime: 50,
}

export const Scout_2: typeof Scout = {
    ...Scout,
    ageRequirement: AgeEnum.CASTLE,
    level: 2,
    baseDamage: 7,
    hp: 60,
    upgrade: ScoutUpgrade_2,
}

const ScoutUpgrade_1: MilitaryUpgrade = {
    unit: Scout_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 150,
        gold: 50,
    },
    queueTime: 45,
}

export const Scout_1: typeof Scout = {
    ...Scout,
    ageRequirement: AgeEnum.FEUDAL,
    level: 1,
    baseDamage: 5,
    hp: 45,
    upgrade: ScoutUpgrade_1,
}