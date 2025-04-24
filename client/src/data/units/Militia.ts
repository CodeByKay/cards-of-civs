import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";
import { CounterDamage } from "../../interfaces/counterDamage";

const counter: CounterDamage = {
    units: [],
    damage: 0,
}

export const Swordman: BaseUnit = {
    name: 'Swordman',
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

export const Swordman_4: typeof Swordman = {
    ...Swordman,
    ageRequirement: AgeEnum.AGE_4,
    level: 4,
    baseDamage: 12,
    hp: 65,
    upgrade: null,
}

const SwordmanUpgrade_3: MilitaryUpgrade = {
    unit: Swordman_4,
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

export const Swordman_3: typeof Swordman = {
    ...Swordman,
    ageRequirement: AgeEnum.AGE_3,
    level: 3,
    baseDamage: 9,
    hp: 60,
    upgrade: SwordmanUpgrade_3,
}

const SwordmanUpgrade_2: MilitaryUpgrade = {
    unit: Swordman_3,
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

export const Swordman_2: typeof Swordman = {
    ...Swordman,
    ageRequirement: AgeEnum.AGE_2,
    level: 2,
    baseDamage: 6,
    hp: 45,
    upgrade: SwordmanUpgrade_2,
}

const SwordmanUpgrade_1: MilitaryUpgrade = {
    unit: Swordman_2,
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

export const Swordman_1: typeof Swordman = {
    ...Swordman,
    ageRequirement: AgeEnum.AGE_1,
    level: 1,
    baseDamage: 4,
    hp: 40,
    upgrade: SwordmanUpgrade_1,
}