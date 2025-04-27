import { AgeEnum } from "../enum/ageEnum";
import { Cost } from "./cost";

export interface Upgrade {
    ageRequirement: AgeEnum;
    cost: Cost;
    queueTime: number;
}