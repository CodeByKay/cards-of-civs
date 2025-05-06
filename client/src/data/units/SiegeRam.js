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
export var SiegeRam = {
    name: 'Siege Ram',
    unitEnum: UnitEnum.SIEGE_RAM,
    cost: {
        wood: 160,
        gold: 75,
    },
    queueTime: 36,
    range: 1,
    speed: 1,
    ageRequirement: null,
    level: 0,
    baseDamage: 0,
    hp: 0,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
};
export var SiegeRam_2 = __assign(__assign({}, SiegeRam), { ageRequirement: AgeEnum.IMPERIAL, level: 2, baseDamage: 3, hp: 200, upgrade: null, structureDamage: 160, counterDamage: [
        {
            unitEnum: UnitEnum.SIEGE_RAM,
            damage: 50,
        },
        {
            unitEnum: UnitEnum.TREBUCHET,
            damage: 50,
        }
    ] });
var SiegeRamUpgrade_1 = {
    unit: SiegeRam_2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 300,
    },
    queueTime: 50,
};
export var SiegeRam_1 = __assign(__assign({}, SiegeRam), { ageRequirement: AgeEnum.CASTLE, level: 1, baseDamage: 2, hp: 175, upgrade: SiegeRamUpgrade_1, structureDamage: 150, counterDamage: [
        {
            unitEnum: UnitEnum.SIEGE_RAM,
            damage: 40,
        },
        {
            unitEnum: UnitEnum.TREBUCHET,
            damage: 40,
        }
    ] });
