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
export var Swordsman = {
    unitEnum: UnitEnum.SWORDSMAN,
    name: 'Swordsman',
    cost: {
        food: 50,
        gold: 20,
    },
    queueTime: 21,
    range: 1,
    speed: 3,
    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
};
export var Swordsman_4 = __assign(__assign({}, Swordsman), { ageRequirement: AgeEnum.IMPERIAL, level: 4, baseDamage: 12, hp: 65, upgrade: null, structureDamage: 4 });
var SwordsmanUpgrade_3 = {
    unit: Swordsman_4,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 200,
        gold: 100,
    },
    queueTime: 45,
};
export var Swordsman_3 = __assign(__assign({}, Swordsman), { ageRequirement: AgeEnum.CASTLE, level: 3, baseDamage: 9, hp: 60, upgrade: SwordsmanUpgrade_3, structureDamage: 3 });
var SwordsmanUpgrade_2 = {
    unit: Swordsman_3,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 150,
        gold: 65,
    },
    queueTime: 40,
};
export var Swordsman_2 = __assign(__assign({}, Swordsman), { ageRequirement: AgeEnum.FEUDAL, level: 2, baseDamage: 6, hp: 45, upgrade: SwordsmanUpgrade_2, structureDamage: 2 });
var SwordsmanUpgrade_1 = {
    unit: Swordsman_2,
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 100,
        gold: 40,
    },
    queueTime: 40,
};
export var Swordsman_1 = __assign(__assign({}, Swordsman), { ageRequirement: AgeEnum.DARK, level: 1, baseDamage: 4, hp: 40, upgrade: SwordsmanUpgrade_1, structureDamage: 0 });
