import { AgeEnum } from "../enum/ageEnum";
import { ResourceEnum } from "../enum/resourcesEnum";

export interface Upgrade {
    ageRequirement: AgeEnum;
    cost: {
        type: ResourceEnum;
        amount: number;
    }[];
    queueTime: number;
}