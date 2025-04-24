import { BaseUnit } from "./unit";
import { Upgrade } from "./upgrade";

export interface MilitaryUpgrade extends Upgrade {
    unit: BaseUnit;
}