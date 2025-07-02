import { BaseUnit } from "../../interfaces/unit.js";
import { AgeEnum } from "../../enum/ageEnum.js";
import { MilitaryUpgrade } from "../../interfaces/military.js";
import { UnitEnum } from "../../enum/unitEnum.js";

export const Camel: BaseUnit = {
    name: 'Camel',
    unitEnum: UnitEnum.CAMEL,
    cost: {
        food: 55,
        gold: 60,
    },
    queueTime: 22,
    range: 1,
    speed: 5,

    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
}

export const Camel_2: typeof Camel = {
    ...Camel,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 2,
    baseDamage: 7,
    hp: 120,
    upgrade: null,
    counterDamage: [
        {
            unitEnum: UnitEnum.SCOUT,
            damage: 18
        }, {
            unitEnum: UnitEnum.KNIGHT,
            damage: 18
        }, {
            unitEnum: UnitEnum.CAVALRY_ARCHER,
            damage: 18
        }, {
            unitEnum: UnitEnum.CAMEL,
            damage: 9
        }, {
            unitEnum: UnitEnum.ELEPHANT,
            damage: 18
        }  
    ],
}

const CamelUpgrade_1: MilitaryUpgrade = {
    unit: Camel_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 325,
        gold: 360,
    },
    queueTime: 105,
}

export const Camel_1: typeof Camel = {
    ...Camel,
    ageRequirement: AgeEnum.CASTLE,
    level: 1,
    baseDamage: 6,
    hp: 100,
    upgrade: CamelUpgrade_1,
    counterDamage: [
        {
            unitEnum: UnitEnum.SCOUT,
            damage: 9
        }, {
            unitEnum: UnitEnum.KNIGHT,
            damage: 9
        }, {
            unitEnum: UnitEnum.CAVALRY_ARCHER,
            damage: 9
        }, {
            unitEnum: UnitEnum.CAMEL,
            damage: 5
        }, {
            unitEnum: UnitEnum.ELEPHANT,
            damage: 9
        }  
    ],
}