import { BaseBuilding } from "./building";
import { BaseUnit } from "./unit";
import { Upgrade } from "./upgrade";

export interface MilitaryBuilding extends BaseBuilding {
    units: BaseUnit[];
    damage: number;
    range: number;
    speed: number;
}

export interface MilitaryUpgrade extends Upgrade {
    unit: BaseUnit;
}