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
import { AgeEnum } from "../../enum/ageEnum";
import { UnitEnum } from "../../enum/unitEnum";
export var Scout = {
    name: 'Scout',
    unitEnum: UnitEnum.SCOUT,
    cost: {
        food: 80,
    },
    queueTime: 30,
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
export var Scout_3 = __assign(__assign({}, Scout), { ageRequirement: AgeEnum.IMPERIAL, level: 3, baseDamage: 7, hp: 75, upgrade: null });
var ScoutUpgrade_2 = {
    unit: Scout_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 500,
        gold: 600,
    },
    queueTime: 50,
};
export var Scout_2 = __assign(__assign({}, Scout), { ageRequirement: AgeEnum.CASTLE, level: 2, baseDamage: 7, hp: 60, upgrade: ScoutUpgrade_2 });
var ScoutUpgrade_1 = {
    unit: Scout_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 150,
        gold: 50,
    },
    queueTime: 45,
};
export var Scout_1 = __assign(__assign({}, Scout), { ageRequirement: AgeEnum.FEUDAL, level: 1, baseDamage: 5, hp: 45, upgrade: ScoutUpgrade_1 });
