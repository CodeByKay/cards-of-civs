import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";
import { Camel, CavalryArcher, Elephant, Knight, Scout } from "../indexUnits";

export const Spearman: BaseUnit = {
    name: 'Spearman',
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 35,
        }, {
            type: ResourceEnum.WOOD,
            amount: 20,
        }
    ],
    queueTime: 22,
    range: 1,
    speed: 3,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 1,
    counterDamage: null,
}

export const Spearman_3: typeof Spearman = {
    ...Spearman,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 3,
    baseDamage: 6,
    hp: 60,
    upgrade: null,
    counterDamage: {
        counters: [
            {
                unit: Scout,
                damage: 32
            }, {
                unit: Knight,
                damage: 32
            }, {
                unit: CavalryArcher,
                damage: 32
            }, {
                unit: Camel,
                damage: 26
            }, {
                unit: Elephant,
                damage: 28
            }  
        ]  
    },
}

const SpearmanUpgrade_2: MilitaryUpgrade = {
    unit: Spearman_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 300,
        }, {
            type: ResourceEnum.GOLD,
            amount: 600,
        }
    ],
    queueTime: 50,
}

export const Spearman_2: typeof Spearman = {
    ...Spearman,
    ageRequirement: AgeEnum.CASTLE,
    level: 2,
    baseDamage: 4,
    hp: 55,
    upgrade: SpearmanUpgrade_2,
    counterDamage: {
        counters: [
            {
                unit: Scout,
                damage: 22
            }, {
                unit: Knight,
                damage: 22
            }, {
                unit: CavalryArcher,
                damage: 22
            }, {
                unit: Camel,
                damage: 18
            }, {
                unit: Elephant,
                damage: 25
            }  
        ]  
    },
}

const SpearmanUpgrade_1: MilitaryUpgrade = {
    unit: Spearman_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 160,
        }, {
            type: ResourceEnum.GOLD,
            amount: 90,
        }
    ],
    queueTime: 35,
}

export const Spearman_1: typeof Spearman = {
    ...Spearman,
    ageRequirement: AgeEnum.FEUDAL,
    level: 1,
    baseDamage: 3,
    hp: 45,
    upgrade: SpearmanUpgrade_1,
    counterDamage: {
        counters: [
            {
                unit: Scout,
                damage: 15
            }, {
                unit: Knight,
                damage: 15
            }, {
                unit: CavalryArcher,
                damage: 15
            }, {
                unit: Camel,
                damage: 12
            }, {
                unit: Elephant,
                damage: 15
            }  
        ]  
    },
}