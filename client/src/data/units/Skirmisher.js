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
export var Skirmisher = {
    name: 'Skirmisher',
    unitEnum: UnitEnum.SKIRMISHER,
    cost: {
        food: 25,
        wood: 35,
    },
    queueTime: 22,
    range: 3,
    speed: 2,
    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
};
export var Skirmisher_3 = __assign(__assign({}, Skirmisher), { ageRequirement: AgeEnum.IMPERIAL, level: 3, baseDamage: 4, hp: 35, upgrade: null, counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 4
        },
        {
            unitEnum: UnitEnum.ARCHER,
            damage: 5
        },
        {
            unitEnum: UnitEnum.CAVALRY_ARCHER,
            damage: 3
        }
    ] });
var SkirmisherUpgrade_2 = {
    unit: Skirmisher_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        wood: 300,
        gold: 300,
    },
    queueTime: 50,
};
export var Skirmisher_2 = __assign(__assign({}, Skirmisher), { ageRequirement: AgeEnum.CASTLE, level: 2, baseDamage: 3, hp: 35, upgrade: SkirmisherUpgrade_2, counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 4
        },
        {
            unitEnum: UnitEnum.ARCHER,
            damage: 4
        },
        {
            unitEnum: UnitEnum.CAVALRY_ARCHER,
            damage: 2
        }
    ] });
var SkirmisherUpgrade_1 = {
    unit: Skirmisher_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        wood: 230,
        gold: 130,
    },
    queueTime: 50,
};
export var Skirmisher_1 = __assign(__assign({}, Skirmisher), { ageRequirement: AgeEnum.FEUDAL, level: 1, baseDamage: 2, hp: 30, upgrade: SkirmisherUpgrade_1, counterDamage: [
        {
            unitEnum: UnitEnum.ARCHER,
            damage: 3
        },
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 3
        }
    ] });
