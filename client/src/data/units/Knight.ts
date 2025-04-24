import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";

export const Knight: BaseUnit = {
    name: 'Knight',
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 60,
        },
        {
            type: ResourceEnum.GOLD,
            amount: 75,
        }
    ],
    queueTime: 30,
    range: 1,
    speed: 5,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: null,
}

export const Knight_2: typeof Knight = {
    ...Knight,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 2,
    baseDamage: 12,
    hp: 120,
    upgrade: null,
}

const KnightUpgrade_1: MilitaryUpgrade = {
    unit: Knight_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 300,
        }, {
            type: ResourceEnum.GOLD,
            amount: 300,
        }
    ],
    queueTime: 80,
}

export const Knight_1: typeof Knight = {
    ...Knight,
    ageRequirement: AgeEnum.CASTLE,
    level: 1,
    baseDamage: 10,
    hp: 100,
    upgrade: KnightUpgrade_1,
}