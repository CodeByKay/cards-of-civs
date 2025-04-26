import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { ProductionBuilding } from "../../interfaces/productionBuilding";
import { ProductionUpgrade } from "../../interfaces/productionUpgrade";

const FarmUpgrade_1: ProductionUpgrade = {
    productionMultiplier: 1.25,
    ageRequirement: AgeEnum.DARK,
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

const FarmUpgrade_2: ProductionUpgrade = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.FEUDAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 125,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 125,
        },
    ],
    queueTime: 40,
}

const FarmUpgrade_3: ProductionUpgrade = {
    productionMultiplier: 1.75,
    ageRequirement: AgeEnum.CASTLE,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 200,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 200,
        },
    ],
    queueTime: 70,
}

const FarmUpgrade_4: ProductionUpgrade = {
    productionMultiplier: 2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 350,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 350,
        },
    ],
    queueTime: 110,
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
    upgrade: [FarmUpgrade_1, FarmUpgrade_2, FarmUpgrade_3, FarmUpgrade_4],
}