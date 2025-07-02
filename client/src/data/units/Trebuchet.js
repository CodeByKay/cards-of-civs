import { AgeEnum } from "../../enum/ageEnum.js";
import { UnitEnum } from "../../enum/unitEnum.js";
export var Trebuchet = {
    unitEnum: UnitEnum.TREBUCHET,
    name: 'Trebuchet',
    cost: {
        wood: 200,
        gold: 200,
    },
    queueTime: 50,
    range: 9,
    speed: 1,
    ageRequirement: AgeEnum.IMPERIAL,
    level: 1,
    baseDamage: 50,
    hp: 150,
    upgrade: null,
    structureDamage: 400,
    counterDamage: [],
};
