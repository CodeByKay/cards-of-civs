import { BaseUnit } from "../../interfaces/unit.js";
import { AgeEnum } from "../../enum/ageEnum.js";
import { MilitaryUpgrade } from "../../interfaces/military.js";
import { UnitEnum } from "../../enum/unitEnum.js";

export const Archer: BaseUnit = {
    name: 'Archer',
    unitEnum: UnitEnum.ARCHER,
    cost: {
        wood: 25,
        gold: 45,
    },
    queueTime: 35,
    range: 3,
    speed: 2,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
}

export const Archer_3: typeof Archer = {
    ...Archer,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 3,
    baseDamage: 6,
    hp: 40,
    upgrade: null,
    counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 5
        } 
    ],
}

const ArcherUpgrade_2: MilitaryUpgrade = {
    unit: Archer_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 450,
        gold: 300,
    },
    queueTime: 50,
}

export const Archer_2: typeof Archer = {
    ...Archer,
    ageRequirement: AgeEnum.CASTLE,
    level: 2,
    baseDamage: 5,
    hp: 35,
    upgrade: ArcherUpgrade_2,
    counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 4
        }
    ],
}

const ArcherUpgrade_1: MilitaryUpgrade = {
    unit: Archer_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 175,
        gold: 100,
    },
    queueTime: 35,
}

export const Archer_1: typeof Archer = {
    ...Archer,
    ageRequirement: AgeEnum.FEUDAL,
    level: 1,
    baseDamage: 4,
    hp: 30,
    upgrade: ArcherUpgrade_1,
    counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 3
        }
    ],
}