import { BaseUnit } from "../../interfaces/unit";
import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";

export const Trebuchet: BaseUnit = {
    name: 'Trebuchet',
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 200,
        }, {
            type: ResourceEnum.GOLD,
            amount: 200,
        }
    ],
    queueTime: 50,
    range: 9,
    speed: 1,

    ageRequirement: AgeEnum.IMPERIAL,
    level: 1,
    baseDamage: 50,
    hp: 150,
    upgrade: null,
    structureDamage: 400,
    counterDamage: null,
}