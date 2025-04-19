import { BaseBuilding } from "./building";
import { ResourceEnum } from "../../enum/resourcesEnum";

export interface ProductionBuilding extends BaseBuilding {
    type: ResourceEnum;
    upgrades: [];
}