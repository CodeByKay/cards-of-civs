import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryUpgrade } from "../../interfaces/military";

export const Swordsman: BaseUnit = {
    name: 'Swordsman',
    cost: {
        food: 50,
        gold: 20,
    },
    queueTime: 21,
    range: 1,
    speed: 3,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
}

export const Swordsman_4: typeof Swordsman = {
    ...Swordsman,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 4,
    baseDamage: 12,
    hp: 65,
    upgrade: null,
    structureDamage: 4,
}

const SwordsmanUpgrade_3: MilitaryUpgrade = {
    unit: Swordsman_4,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 200,
        gold: 100,
    },
    queueTime: 45,
}

export const Swordsman_3: typeof Swordsman = {
    ...Swordsman,
    ageRequirement: AgeEnum.CASTLE,
    level: 3,
    baseDamage: 9,
    hp: 60,
    upgrade: SwordsmanUpgrade_3,
    structureDamage: 3,
}

const SwordsmanUpgrade_2: MilitaryUpgrade = {
    unit: Swordsman_3,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 150,
        gold: 65,
    },
    queueTime: 40,
}

export const Swordsman_2: typeof Swordsman = {
    ...Swordsman,
    ageRequirement: AgeEnum.FEUDAL,
    level: 2,
    baseDamage: 6,
    hp: 45,
    upgrade: SwordsmanUpgrade_2,
    structureDamage: 2,
}

const SwordsmanUpgrade_1: MilitaryUpgrade = {
    unit: Swordsman_2,
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 100,
        gold: 40,
    },
    queueTime: 40,
}

export const Swordsman_1: typeof Swordsman = {
    ...Swordsman,
    ageRequirement: AgeEnum.DARK,
    level: 1,
    baseDamage: 4,
    hp: 40,
    upgrade: SwordsmanUpgrade_1,
    structureDamage: 0,
}