import { BaseBuilding } from "./building";
import { ResourceEnum } from "../enum/resourcesEnum";
import { Upgrade } from "./upgrade";

export interface ProductionBuilding extends BaseBuilding {
    type: ResourceEnum;
    upgrades: [Upgrade];
}