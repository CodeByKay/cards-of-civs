import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuildingEnum } from "../../enum/militaryBuildingEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryBuilding } from "../../interfaces/militaryBuilding";
import { Swordsman, Spearman } from "../indexUnits";

export const Barracks: MilitaryBuilding = {
    name: 'Barracks',
    ageRequirement: AgeEnum.DARK,
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 175,
        }
    ],
    baseHp: 1200,
    wallHpBonus: 0,
    queueTime: 50,

    type: MilitaryBuildingEnum.BARRACKS,
    units: [Swordsman, Spearman],
    damage: 10,
    range: 1,
    speed: 3,
}
