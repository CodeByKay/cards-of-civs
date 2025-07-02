var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { AgeEnum } from "../../enum/ageEnum.js";
import { UnitEnum } from "../../enum/unitEnum.js";
export var Camel = {
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
};
export var Camel_2 = __assign(__assign({}, Camel), { ageRequirement: AgeEnum.IMPERIAL, level: 2, baseDamage: 7, hp: 120, upgrade: null, counterDamage: [
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
    ] });
var CamelUpgrade_1 = {
    unit: Camel_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 325,
        gold: 360,
    },
    queueTime: 105,
};
export var Camel_1 = __assign(__assign({}, Camel), { ageRequirement: AgeEnum.CASTLE, level: 1, baseDamage: 6, hp: 100, upgrade: CamelUpgrade_1, counterDamage: [
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
    ] });
