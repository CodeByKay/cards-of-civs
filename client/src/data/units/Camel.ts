import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryUpgrade } from "../../interfaces/military";
import { CavalryArcher, Elephant, Knight, Scout } from "../indexUnits";

export const Camel: BaseUnit = {
    name: 'Camel',
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
            unit: Scout,
            damage: 18
        }, {
            unit: Knight,
            damage: 18
        }, {
            unit: CavalryArcher,
            damage: 18
        }, {
            unit: Camel,
            damage: 9
        }, {
            unit: Elephant,
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
            unit: Scout,
            damage: 9
        }, {
            unit: Knight,
            damage: 9
        }, {
            unit: CavalryArcher,
            damage: 9
        }, {
            unit: Camel,
            damage: 5
        }, {
            unit: Elephant,
            damage: 9
        }  
    ],
}