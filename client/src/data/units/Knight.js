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
export var Knight = {
    name: 'Knight',
    unitEnum: UnitEnum.KNIGHT,
    cost: {
        food: 60,
        gold: 75,
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
export var Knight_2 = __assign(__assign({}, Knight), { ageRequirement: AgeEnum.IMPERIAL, level: 2, baseDamage: 12, hp: 120, upgrade: null });
var KnightUpgrade_1 = {
    unit: Knight_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 300,
        gold: 300,
    },
    queueTime: 80,
};
export var Knight_1 = __assign(__assign({}, Knight), { ageRequirement: AgeEnum.CASTLE, level: 1, baseDamage: 10, hp: 100, upgrade: KnightUpgrade_1 });
