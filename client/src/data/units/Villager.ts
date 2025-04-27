import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";

export const Villager: BaseUnit = {
    name: 'Villager',
    cost: {
        food: 50,
    },
    queueTime: 25,
    range: 1,
    speed: 2,

    ageRequirement: AgeEnum.DARK,
    level: 1,
    baseDamage: 2,
    hp: 40,
    upgrade: null,
    structureDamage: 0,
    counterDamage: [],
}