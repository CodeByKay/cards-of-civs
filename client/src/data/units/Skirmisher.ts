import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";
import { Archer, CavalryArcher, Spearman } from "../indexUnits";

export const Skirmisher: BaseUnit = {
    name: 'Skirmisher',
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 25,
        }, {
            type: ResourceEnum.WOOD,
            amount: 35,
        }
    ],
    queueTime: 22,
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

export const Skirmisher_3: typeof Skirmisher = {
    ...Skirmisher,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 3,
    baseDamage: 4,
    hp: 35,
    upgrade: null,
    counterDamage: {
        counters: [
            {
                unit: Spearman,
                damage: 4
            },
            {
                unit: Archer,
                damage: 5
            },
            {
                unit: CavalryArcher,
                damage: 3
            }
        ]  
    },
}

const SkirmisherUpgrade_2: MilitaryUpgrade = {
    unit: Skirmisher_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 300,
        }, {
            type: ResourceEnum.GOLD,
            amount: 300,
        }
    ],
    queueTime: 50,
}

export const Skirmisher_2: typeof Skirmisher = {
    ...Skirmisher,
    ageRequirement: AgeEnum.CASTLE,
    level: 2,
    baseDamage: 3,
    hp: 35,
    upgrade: SkirmisherUpgrade_2,
    counterDamage: {
        counters: [
            {
                unit: Spearman,
                damage: 4
            },
            {
                unit: Archer,
                damage: 4
            },
            {
                unit: CavalryArcher,
                damage: 2
            }
        ]  
    },
}

const SkirmisherUpgrade_1: MilitaryUpgrade = {
    unit: Skirmisher_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 230,
        }, {
            type: ResourceEnum.GOLD,
            amount: 130,
        }
    ],
    queueTime: 50,
}

export const Skirmisher_1: typeof Skirmisher = {
    ...Skirmisher,
    ageRequirement: AgeEnum.FEUDAL,
    level: 1,
    baseDamage: 2,
    hp: 30,
    upgrade: SkirmisherUpgrade_1,
    counterDamage: {
        counters: [
            {
                unit: Spearman,
                damage: 3
            }, 
            {
                unit: Archer,
                damage: 3
            }, 
        ]  
    },
}