import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { ProductionBuilding } from "../../interfaces/productionBuilding";
import { ProductionUpgrade } from "../../interfaces/productionUpgrade";

const FarmUpgrade: ProductionUpgrade = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.FEUDAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 75,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 75,
        },
    ],
    queueTime: 20,
}

export const Mill: ProductionBuilding = {
    name: 'Mill',
    ageRequirement: AgeEnum.DARK,
    cost: [
        {
            type: ResourceEnum.WOOD,
            amount: 100,
        }
    ],
    baseHp: 600,
    wallHpBonus: 0,
    queueTime: 35,

    type: ResourceEnum.FOOD,
    upgrade: FarmUpgrade,
}