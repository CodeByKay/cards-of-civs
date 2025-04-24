import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";
import { CounterDamage } from "../../interfaces/counterDamage";

const counter: CounterDamage = {
    units: [],
    damage: 0,
}

export const Spearman: BaseUnit = {
    name: 'Spearman',
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 50,
        }, {
            type: ResourceEnum.GOLD,
            amount: 20,
        }
    ],
    queueTime: 21,
    counterDamage: counter,
    range: 1,
    speed: 3,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
}

export const Spearman_4: typeof Spearman = {
    ...Spearman,
    ageRequirement: AgeEnum.AGE_4,
    level: 4,
    baseDamage: 12,
    hp: 65,
    upgrade: null,
}

const SpearmanUpgrade_3: MilitaryUpgrade = {
    unit: Spearman_4,
    ageRequirement: AgeEnum.AGE_4,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 200,
        }, {
            type: ResourceEnum.GOLD,
            amount: 100,
        }
    ],
    queueTime: 45,
}

export const Spearman_3: typeof Spearman = {
    ...Spearman,
    ageRequirement: AgeEnum.AGE_3,
    level: 3,
    baseDamage: 9,
    hp: 60,
    upgrade: SpearmanUpgrade_3,
}

const SpearmanUpgrade_2: MilitaryUpgrade = {
    unit: Spearman_3,
    ageRequirement: AgeEnum.AGE_3,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 150,
        }, {
            type: ResourceEnum.GOLD,
            amount: 65,
        }
    ],
    queueTime: 40,
}

export const Spearman_2: typeof Spearman = {
    ...Spearman,
    ageRequirement: AgeEnum.AGE_2,
    level: 2,
    baseDamage: 6,
    hp: 45,
    upgrade: SpearmanUpgrade_2,
}

const SpearmanUpgrade_1: MilitaryUpgrade = {
    unit: Spearman_2,
    ageRequirement: AgeEnum.AGE_2,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 100,
        }, {
            type: ResourceEnum.GOLD,
            amount: 40,
        }
    ],
    queueTime: 40,
}

export const Spearman_1: typeof Spearman = {
    ...Spearman,
    ageRequirement: AgeEnum.AGE_1,
    level: 1,
    baseDamage: 4,
    hp: 40,
    upgrade: SpearmanUpgrade_1,
}