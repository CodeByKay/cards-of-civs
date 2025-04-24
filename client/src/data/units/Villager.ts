import { BaseUnit } from "../../interfaces/unit";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { AgeEnum } from "../../enum/ageEnum";

export const Villager: BaseUnit = {
    name: 'Villager',
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 50,
        }
    ],
    queueTime: 25,
    range: 1,
    speed: 2,

    ageRequirement: AgeEnum.DARK,
    level: 1,
    baseDamage: 2,
    hp: 40,
    upgrade: null,
    structureDamage: 0,
    counterDamage: null,
}