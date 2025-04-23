// Type unit | building | upgrade
// Building association for unit and upgrade, if building is missing, drop.
// Cost, to be removed on queue. To be returned on cancel
// Queue time

import { ActionEnum } from "../enum/actionEnum";
import { BaseBuilding } from "./building";

export interface Action {
    type: ActionEnum;
    timeRemaining: number;
    originBuilding: BaseBuilding;
    note: string;
  }