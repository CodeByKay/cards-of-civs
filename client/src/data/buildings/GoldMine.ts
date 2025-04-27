import { AgeEnum } from "../../enum/ageEnum";
import { ProductionBuilding, ProductionUpgrade } from "../../interfaces/production";

const GoldUpgrade_1: ProductionUpgrade = {
    productionMultiplier: 1.1,
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 100,
        wood: 75,
    },
    queueTime: 30,
}

const GoldUpgrade_2: ProductionUpgrade = {
    productionMultiplier: 1.25,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 175,
        wood: 100,
    },
    queueTime: 75,
}

const GoldUpgrade_3: ProductionUpgrade = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 275,
        wood: 150,
    },
    queueTime: 125,
}

export const GoldMine: ProductionBuilding = {
    name: 'Gold Mine',
    ageRequirement: AgeEnum.DARK,
    cost: {
        wood: 100,
    },
    baseHp: 600,
    wallHpBonus: 0,
    queueTime: 35,

    upgrade: [GoldUpgrade_1, GoldUpgrade_2, GoldUpgrade_3],
}