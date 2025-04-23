import { ResourceEnum } from "../enum/resourcesEnum";
import { ProductionBuilding } from "./productionBuilding";
import { UnitGroup } from "./unitGroup";

export interface Resource {
    type: ResourceEnum;
    villagers: UnitGroup;
    productionRate: number;
    productionBuilding: ProductionBuilding;
}