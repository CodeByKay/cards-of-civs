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
export var Archer = {
    name: 'Archer',
    unitEnum: UnitEnum.ARCHER,
    cost: {
        wood: 25,
        gold: 45,
    },
    queueTime: 35,
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
export var Archer_3 = __assign(__assign({}, Archer), { ageRequirement: AgeEnum.IMPERIAL, level: 3, baseDamage: 6, hp: 40, upgrade: null, counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 5
        }
    ] });
var ArcherUpgrade_2 = {
    unit: Archer_3,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 450,
        gold: 300,
    },
    queueTime: 50,
};
export var Archer_2 = __assign(__assign({}, Archer), { ageRequirement: AgeEnum.CASTLE, level: 2, baseDamage: 5, hp: 35, upgrade: ArcherUpgrade_2, counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 4
        }
    ] });
var ArcherUpgrade_1 = {
    unit: Archer_2,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 175,
        gold: 100,
    },
    queueTime: 35,
};
export var Archer_1 = __assign(__assign({}, Archer), { ageRequirement: AgeEnum.FEUDAL, level: 1, baseDamage: 4, hp: 30, upgrade: ArcherUpgrade_1, counterDamage: [
        {
            unitEnum: UnitEnum.SPEARMAN,
            damage: 3
        }
    ] });
