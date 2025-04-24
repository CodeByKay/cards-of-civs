import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryUpgrade } from "../../interfaces/militaryUpgrade";
import { Trebuchet } from "../indexUnits";

export const SiegeRam: BaseUnit = {
    name: 'SiegeRam',
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 160,
        }, {
            type: ResourceEnum.GOLD,
            amount: 75,
        }
    ],
    queueTime: 36,
    counterDamage: null,
    range: 1,
    speed: 1,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
}

export const SiegeRam_2: typeof SiegeRam = {
    ...SiegeRam,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 2,
    baseDamage: 3,
    hp: 200,
    upgrade: null,
    structureDamage: 160,
    counterDamage: {
        counters: [
            {
                unit: SiegeRam,
                damage: 50,
            },
            {
                unit: Trebuchet,
                damage: 50,
            }
        ]
    },
}

const SiegeRamUpgrade_1: MilitaryUpgrade = {
    unit: SiegeRam_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 300,
        }
    ],
    queueTime: 50,
}

export const SiegeRam_1: typeof SiegeRam = {
    ...SiegeRam,
    ageRequirement: AgeEnum.CASTLE,
    level: 1,
    baseDamage: 2,
    hp: 175,
    upgrade: SiegeRamUpgrade_1,
    structureDamage: 150,
    counterDamage: {
        counters: [
            {
                unit: SiegeRam,
                damage: 40,
            },
            {
                unit: Trebuchet,
                damage: 40,
            }
        ]
    },
}