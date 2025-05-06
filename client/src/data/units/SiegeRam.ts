import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryUpgrade } from "../../interfaces/military";
import { UnitEnum } from "../../enum/unitEnum";

export const SiegeRam: BaseUnit = {
    name: 'Siege Ram',
    unitEnum: UnitEnum.SIEGE_RAM,
    cost: {
        wood: 160,
        gold: 75,
    },
    queueTime: 36,
    range: 1,
    speed: 1,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
}

export const SiegeRam_2: typeof SiegeRam = {
    ...SiegeRam,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 2,
    baseDamage: 3,
    hp: 200,
    upgrade: null,
    structureDamage: 160,
    counterDamage: [
        {
            unitEnum: UnitEnum.SIEGE_RAM,
            damage: 50,
        },
        {
            unitEnum: UnitEnum.TREBUCHET,
            damage: 50,
        }
    ],
}

const SiegeRamUpgrade_1: MilitaryUpgrade = {
    unit: SiegeRam_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 300,
    },
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
    counterDamage: [
        {
            unitEnum: UnitEnum.SIEGE_RAM,
            damage: 40,
        },
        {
            unitEnum: UnitEnum.TREBUCHET,
            damage: 40,
        }
    ],
}