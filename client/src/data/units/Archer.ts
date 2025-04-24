import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";
import { Spearman } from "../indexUnits";

export const Archer: BaseUnit = {
    name: 'Archer',
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 25,
        }, {
            type: ResourceEnum.GOLD,
            amount: 45,
        }
    ],
    queueTime: 35,
    range: 3,
    speed: 2,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: null,
}

export const Archer_3: typeof Archer = {
    ...Archer,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 3,
    baseDamage: 6,
    hp: 40,
    upgrade: null,
    counterDamage: {
        counters: [
            {
                unit: Spearman,
                damage: 3
            } 
        ]  
    },
}

const ArcherUpgrade_2: MilitaryUpgrade = {
    unit: Archer_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 450,
        }, {
            type: ResourceEnum.GOLD,
            amount: 350,
        }
    ],
    queueTime: 50,
}

export const Archer_2: typeof Archer = {
    ...Archer,
    ageRequirement: AgeEnum.CASTLE,
    level: 2,
    baseDamage: 5,
    hp: 35,
    upgrade: ArcherUpgrade_2,
    counterDamage: {
        counters: [
            {
                unit: Spearman,
                damage: 3
            }
        ]  
    },
}

const ArcherUpgrade_1: MilitaryUpgrade = {
    unit: Archer_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 175,
        }, {
            type: ResourceEnum.GOLD,
            amount: 100,
        }
    ],
    queueTime: 35,
}

export const Archer_1: typeof Archer = {
    ...Archer,
    ageRequirement: AgeEnum.FEUDAL,
    level: 1,
    baseDamage: 4,
    hp: 30,
    upgrade: ArcherUpgrade_1,
    counterDamage: {
        counters: [
            {
                unit: Spearman,
                damage: 3
            }, 
        ]  
    },
}