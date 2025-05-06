import { AgeEnum } from "../../enum/ageEnum";
var FarmUpgrade_1 = {
    productionMultiplier: 1.25,
    ageRequirement: AgeEnum.DARK,
    cost: {
        food: 75,
        wood: 75,
    },
    queueTime: 20,
};
var FarmUpgrade_2 = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 125,
        wood: 125,
    },
    queueTime: 40,
};
var FarmUpgrade_3 = {
    productionMultiplier: 1.75,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 200,
        wood: 200,
    },
    queueTime: 70,
};
var FarmUpgrade_4 = {
    productionMultiplier: 2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 350,
        wood: 350,
    },
    queueTime: 110,
};
export var Mill = {
    name: 'Mill',
    ageRequirement: AgeEnum.DARK,
    cost: {
        wood: 100,
    },
    baseHp: 600,
    wallHpBonus: 0,
    queueTime: 35,
    upgrade: [FarmUpgrade_1, FarmUpgrade_2, FarmUpgrade_3, FarmUpgrade_4],
};
