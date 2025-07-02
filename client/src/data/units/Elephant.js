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
export var Elephant = {
    name: 'Elephant',
    unitEnum: UnitEnum.ELEPHANT,
    cost: {
        food: 100,
        gold: 70,
    },
    queueTime: 24,
    range: 1,
    speed: 2,
    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
};
export var Elephant_2 = __assign(__assign({}, Elephant), { ageRequirement: AgeEnum.IMPERIAL, level: 2, baseDamage: 14, hp: 300, upgrade: null, structureDamage: 7 });
var ElephantUpgrade_1 = {
    unit: Elephant_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 1100,
        gold: 700,
    },
    queueTime: 100,
};
export var Elephant_1 = __assign(__assign({}, Elephant), { ageRequirement: AgeEnum.CASTLE, level: 1, baseDamage: 12, hp: 250, upgrade: ElephantUpgrade_1, structureDamage: 4 });
