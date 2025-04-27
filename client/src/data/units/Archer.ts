import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryUpgrade } from "../../interfaces/military";
import { Spearman } from "../indexUnits";

export const Archer: BaseUnit = {
    name: 'Archer',
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
            unit: Spearman,
            damage: 3
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
            unit: Spearman,
            damage: 3
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
            unit: Spearman,
            damage: 3
        }, 
    ],
}