import { ResourceEnum } from "../enum/resourcesEnum";
import { ProductionBuilding } from "./productionBuilding";
import { ProductionUpgrade } from "./productionUpgrade";
import { UnitGroup } from "./unitGroup";

export interface Production {
    type: ResourceEnum;
    villagers: UnitGroup;
    productionRate: number;
    productionUpgrade: ProductionUpgrade;
    productionBuilding: ProductionBuilding;
}