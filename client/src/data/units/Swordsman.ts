import { BaseUnit } from "../../interfaces/unit";
import { BaseBuilding } from "../../interfaces/building";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";

export const Swordsman: BaseUnit = {
    name: 'Swordsman',
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
    range: 1,
    speed: 3,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: null,
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

export const Swordsman_1: typeof Swordsman = {
    ...Swordsman,
    ageRequirement: AgeEnum.DARK,
    level: 1,
    baseDamage: 4,
    hp: 40,
    upgrade: SwordsmanUpgrade_1,
    structureDamage: 0,
}