import { UnitGroup } from "./unit";
import { BaseBuilding } from "./building";
import { Upgrade } from "./upgrade";



export interface Production {
    villagers: UnitGroup;
    productionRate: number;
    productionBuilding?: ProductionBuilding;
}

export interface ProductionBuilding extends BaseBuilding {
    upgrade: ProductionUpgrade[];
}

export interface ProductionUpgrade extends Upgrade {
    productionMultiplier: number;
}

