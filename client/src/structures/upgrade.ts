import { AgeEnum } from "../enum/ageEnum";
import { ResourceEnum } from "../enum/resourcesEnum";

export interface Upgrade {
    age: AgeEnum;
    cost: {
        type: ResourceEnum;
        amount: number;
    }[];
    queueTime: number;
}