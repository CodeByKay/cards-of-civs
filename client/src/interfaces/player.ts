import { MilitaryBuilding } from "./militaryBuilding";
import { Production } from "./production";
import { TownCenterBuilding } from "./townCenterBuilding";
import { UnitGroup } from "./unitGroup";

export interface Player {
    townCenter: TownCenterBuilding;
    production: Production[];
    militaryBuildings: MilitaryBuilding[];
    army: UnitGroup[];
    actionQueue: [];
    militaryQueue: [];
    processArray: [];
}