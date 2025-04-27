import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuilding } from "../../interfaces/military";
import { SiegeRam, Trebuchet } from "../indexUnits";

export const Castle: MilitaryBuilding = {
    name: 'Castle',
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        stone: 650,
    },
    baseHp: 5000,
    wallHpBonus: 1000,
    queueTime: 200,

    units: [SiegeRam, Trebuchet],
    damage: 100,
    range: 5,
    speed: 0,
}
