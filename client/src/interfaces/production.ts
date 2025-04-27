import { UnitGroup } from "./unit";
import { BaseBuilding } from "./building";
import { Upgrade } from "./upgrade";

export interface Production {
    villagers: UnitGroup;
    productionRate: number;
    productionUpgrade: ProductionUpgrade;
    productionBuilding: ProductionBuilding;
}

export interface ProductionBuilding extends BaseBuilding {
    upgrade: Upgrade[];
}

export interface ProductionUpgrade extends Upgrade {
    productionMultiplier: number;
}