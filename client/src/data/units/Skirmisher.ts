import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryUpgrade } from "../../interfaces/military";
import { Archer, CavalryArcher, Spearman } from "../indexUnits";

export const Skirmisher: BaseUnit = {
    name: 'Skirmisher',
    cost: {
        food: 25,
        wood: 35,
    },
    queueTime: 22,
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

export const Skirmisher_3: typeof Skirmisher = {
    ...Skirmisher,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 3,
    baseDamage: 4,
    hp: 35,
    upgrade: null,
    counterDamage: [
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
    ],
}

const SkirmisherUpgrade_2: MilitaryUpgrade = {
    unit: Skirmisher_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        wood: 300,
        gold: 300,
    },
    queueTime: 50,
}

export const Skirmisher_2: typeof Skirmisher = {
    ...Skirmisher,
    ageRequirement: AgeEnum.CASTLE,
    level: 2,
    baseDamage: 3,
    hp: 35,
    upgrade: SkirmisherUpgrade_2,
    counterDamage: [
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
    ],
}

const SkirmisherUpgrade_1: MilitaryUpgrade = {
    unit: Skirmisher_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        wood: 230,
        gold: 130,
    },
    queueTime: 50,
}

export const Skirmisher_1: typeof Skirmisher = {
    ...Skirmisher,
    ageRequirement: AgeEnum.FEUDAL,
    level: 1,
    baseDamage: 2,
    hp: 30,
    upgrade: SkirmisherUpgrade_1,
    counterDamage: [
        {
            unit: Spearman,
            damage: 3
        }, 
        {
            unit: Archer,
            damage: 3
        }, 
    ],
}