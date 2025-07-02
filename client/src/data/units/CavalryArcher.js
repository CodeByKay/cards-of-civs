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
export var CavalryArcher = {
    name: 'Cavalry Archer',
    unitEnum: UnitEnum.CAVALRY_ARCHER,
    cost: {
        wood: 40,
        gold: 60,
    },
    queueTime: 37,
    range: 3,
    speed: 5,
    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
};
export var CavalryArcher_2 = __assign(__assign({}, CavalryArcher), { ageRequirement: AgeEnum.IMPERIAL, level: 2, baseDamage: 7, hp: 60, upgrade: null, counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 4
        }
    ] });
var CavalryArcherUpgrade_1 = {
    unit: CavalryArcher_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 900,
        gold: 500,
    },
    queueTime: 55,
};
export var CavalryArcher_1 = __assign(__assign({}, CavalryArcher), { ageRequirement: AgeEnum.CASTLE, level: 1, baseDamage: 6, hp: 50, upgrade: CavalryArcherUpgrade_1, counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 2
        }
    ] });
