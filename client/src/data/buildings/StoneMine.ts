import { AgeEnum } from "../../enum/ageEnum";
import { ProductionBuilding, ProductionUpgrade } from "../../interfaces/production";

const StoneUpgrade_1: ProductionUpgrade = {
    productionMultiplier: 1.1,
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 100,
        wood: 75,
    },
    queueTime: 30,
}

const StoneUpgrade_2: ProductionUpgrade = {
    productionMultiplier: 1.25,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 175,
        wood: 100,
    },
    queueTime: 75,
}

const StoneUpgrade_3: ProductionUpgrade = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 275,
        wood: 150,
    },
    queueTime: 125,
}

export const StoneMine: ProductionBuilding = {
    name: 'Stone Mine',
    ageRequirement: AgeEnum.DARK,
    cost: {
        wood: 100,
    },
    baseHp: 600,
    wallHpBonus: 0,
    queueTime: 35,

    upgrade: [StoneUpgrade_1, StoneUpgrade_2, StoneUpgrade_3],
}