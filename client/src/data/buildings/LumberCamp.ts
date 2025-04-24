import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { ProductionBuilding } from "../../interfaces/productionBuilding";
import { ProductionUpgrade } from "../../interfaces/productionUpgrade";

const WoodUpgrade: ProductionUpgrade = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.FEUDAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 100,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 50,
        },
    ],
    queueTime: 25,
}

export const LumberCamp: ProductionBuilding = {
    name: 'Lumber Camp',
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

    type: ResourceEnum.WOOD,
    upgrade: WoodUpgrade,
}

