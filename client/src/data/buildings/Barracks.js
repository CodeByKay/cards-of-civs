import { AgeEnum } from "../../enum/ageEnum";
import { Swordsman, Spearman } from "../indexUnits";
export var Barracks = {
    name: 'Barracks',
    ageRequirement: AgeEnum.DARK,
    cost: {
        wood: 175,
    },
    baseHp: 1200,
    wallHpBonus: 0,
    queueTime: 50,
    units: [Swordsman, Spearman],
    damage: 10,
    range: 1,
    speed: 3,
};
