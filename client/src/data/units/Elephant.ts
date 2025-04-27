import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryUpgrade } from "../../interfaces/military";

export const Elephant: BaseUnit = {
    name: 'Elephant',
    cost: {
        food: 100,
        gold: 70,
    },
    queueTime: 24,
    range: 1,
    speed: 2,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
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
    cost: {
        food: 1100,
        gold: 700,
    },
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