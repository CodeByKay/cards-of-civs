import { AgeEnum } from "../../enum/ageEnum";
import { ResourceEnum } from "../../enum/resourcesEnum";
import { ProductionBuilding } from "../../interfaces/productionBuilding";
import { ProductionUpgrade } from "../../interfaces/productionUpgrade";

const WoodUpgrade_1: ProductionUpgrade = {
    productionMultiplier: 1.25,
    ageRequirement: AgeEnum.DARK,
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

const WoodUpgrade_2: ProductionUpgrade = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.FEUDAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 150,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 100,
        },
    ],
    queueTime: 50,
}

const WoodUpgrade_3: ProductionUpgrade = {
    productionMultiplier: 1.75,
    ageRequirement: AgeEnum.CASTLE,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 250,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 150,
        },
    ],
    queueTime: 75,
}

const WoodUpgrade_4: ProductionUpgrade = {
    productionMultiplier: 2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: [
        {
            type: ResourceEnum.FOOD,
            amount: 400,
        },
        {
            type: ResourceEnum.WOOD,
            amount: 300,
        },
    ],
    queueTime: 100,
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
    upgrade: [WoodUpgrade_1, WoodUpgrade_2, WoodUpgrade_3, WoodUpgrade_4],
}