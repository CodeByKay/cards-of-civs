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
export var Spearman = {
    name: 'Spearman',
    unitEnum: UnitEnum.SPEARMAN,
    cost: {
        food: 35,
        wood: 20,
    },
    queueTime: 22,
    range: 1,
    speed: 3,
    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 1,
    counterDamage: [],
};
export var Spearman_3 = __assign(__assign({}, Spearman), { ageRequirement: AgeEnum.IMPERIAL, level: 3, baseDamage: 6, hp: 60, upgrade: null, counterDamage: [
        {
            unitEnum: UnitEnum.SCOUT,
            damage: 32
        },
        {
            unitEnum: UnitEnum.KNIGHT,
            damage: 32
        },
        {
            unitEnum: UnitEnum.CAVALRY_ARCHER,
            damage: 15
        },
        {
            unitEnum: UnitEnum.CAMEL,
            damage: 26
        },
        {
            unitEnum: UnitEnum.ELEPHANT,
            damage: 28
        }
    ] });
var SpearmanUpgrade_2 = {
    unit: Spearman_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 300,
        gold: 600,
    },
    queueTime: 50,
};
export var Spearman_2 = __assign(__assign({}, Spearman), { ageRequirement: AgeEnum.CASTLE, level: 2, baseDamage: 4, hp: 55, upgrade: SpearmanUpgrade_2, counterDamage: [
        {
            unitEnum: UnitEnum.SCOUT,
            damage: 22
        },
        {
            unitEnum: UnitEnum.KNIGHT,
            damage: 22
        },
        {
            unitEnum: UnitEnum.CAVALRY_ARCHER,
            damage: 12
        },
        {
            unitEnum: UnitEnum.CAMEL,
            damage: 18
        },
        {
            unitEnum: UnitEnum.ELEPHANT,
            damage: 25
        }
    ] });
var SpearmanUpgrade_1 = {
    unit: Spearman_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 160,
        gold: 90,
    },
    queueTime: 35,
};
export var Spearman_1 = __assign(__assign({}, Spearman), { ageRequirement: AgeEnum.FEUDAL, level: 1, baseDamage: 3, hp: 45, upgrade: SpearmanUpgrade_1, counterDamage: [
        {
            unitEnum: UnitEnum.SCOUT,
            damage: 15
        },
        {
            unitEnum: UnitEnum.KNIGHT,
            damage: 15
        },
        {
            unitEnum: UnitEnum.CAVALRY_ARCHER,
            damage: 10
        },
        {
            unitEnum: UnitEnum.CAMEL,
            damage: 12
        },
        {
            unitEnum: UnitEnum.ELEPHANT,
            damage: 15
        }
    ] });
