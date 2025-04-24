import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuildingEnum } from "../../enum/militaryBuildingEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryBuilding } from "../../interfaces/militaryBuilding";
import { SiegeRam, Trebuchet } from "../indexUnits";

export const Castle: MilitaryBuilding = {
    name: 'Castle',
    ageRequirement: AgeEnum.CASTLE,
    cost: [
        {
            type: ResourceEnum.STONE,
            amount: 650,
        }
    ],
    baseHp: 5000,
    wallHpBonus: 0,
    queueTime: 200,

    type: MilitaryBuildingEnum.STABLE,
    units: [SiegeRam, Trebuchet],
    damage: 100,
    range: 5,
    speed: 0,
}
