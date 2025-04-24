import { Upgrade } from "./upgrade";

export interface ProductionUpgrade extends Upgrade {
    productionMultiplier: number;
}