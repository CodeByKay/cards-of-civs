import { MilitaryBuilding } from "./militaryBuilding";
import { Resource } from "./resource";
import { TownCenter } from "./townCenter";
import { UnitGroup } from "./unitGroup";

export interface Player {
    townCenter: TownCenter;
    resources: [Resource];
    militaryBuildings: [MilitaryBuilding];
    army: [UnitGroup];
    actionQueue: [];
    militaryQueue: [];
    processArray: [];
}