import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuilding } from "../../interfaces/military";
import { Swordsman, Spearman } from "../indexUnits";

export const Barracks: MilitaryBuilding = {
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
}
