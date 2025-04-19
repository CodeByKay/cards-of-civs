import { BaseBuilding } from "./building";
import { MilitaryBuildingEnum } from "../../enum/militaryBuildingEnum";

export interface MilitaryBuilding extends BaseBuilding {
    type: MilitaryBuildingEnum;
    units: [];
    damage: number;
}