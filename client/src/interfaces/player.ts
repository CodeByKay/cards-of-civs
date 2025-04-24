import { MilitaryBuilding } from "./militaryBuilding";
import { Production } from "./production";
import { TownCenter } from "./townCenter";
import { UnitGroup } from "./unitGroup";

export interface Player {
    townCenter: TownCenter;
    production: Production[];
    militaryBuildings: MilitaryBuilding[];
    army: UnitGroup[];
    actionQueue: [];
    militaryQueue: [];
    processArray: [];
}