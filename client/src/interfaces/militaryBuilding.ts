import { BaseBuilding } from "./building";
import { MilitaryBuildingEnum } from "../enum/militaryBuildingEnum";
import { BaseUnit } from "./unit";

export interface MilitaryBuilding extends BaseBuilding {
    type: MilitaryBuildingEnum;
    units: BaseUnit[];
    damage: number;
}