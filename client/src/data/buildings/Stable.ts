import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuildingEnum } from "../../enum/militaryBuildingEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { MilitaryBuilding } from "../../interfaces/militaryBuilding";
import { Scout, Knight, Camel, Elephant } from "../indexUnits";

export const Stable: MilitaryBuilding = {
    name: 'Stable',
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

    type: MilitaryBuildingEnum.STABLE,
    units: [Scout, Knight, Camel, Elephant],
    damage: 10,
    range: 1,
    speed: 5,
}
