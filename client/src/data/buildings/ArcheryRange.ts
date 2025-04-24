import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuildingEnum } from "../../enum/militaryBuildingEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryBuilding } from "../../interfaces/militaryBuilding";
import { Archer, CavalryArcher, Skirmisher } from "../indexUnits";

export const ArcheryRange: MilitaryBuilding = {
    name: 'Archery Range',
    ageRequirement: AgeEnum.FEUDAL,
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 175,
        }
    ],
    baseHp: 1500,
    wallHpBonus: 0,
    queueTime: 50,

    type: MilitaryBuildingEnum.RANGE,
    units: [Archer, Skirmisher, CavalryArcher],
    damage: 10,
    range: 3,
    speed: 0,
}
