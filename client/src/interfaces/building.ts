import { AgeEnum } from "../enum/ageEnum";
import { Cost } from "./cost";

export interface BaseBuilding {
  name: string;
  ageRequirement: AgeEnum;
  cost: Cost;
  baseHp: number;
  wallHpBonus: number;
  queueTime: number;
} 