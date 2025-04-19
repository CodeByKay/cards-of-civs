import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";

export interface BaseBuilding {
  name: string;
  ageRequirement: AgeEnum;
  cost: {
    type: ResourceEnum;
    amount: number;
  }[];
  baseHp: number;
  wallHpBonus: number;
  queueTime: number;
} 