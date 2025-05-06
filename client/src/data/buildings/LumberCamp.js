import { AgeEnum } from "../../enum/ageEnum";
var WoodUpgrade_1 = {
    productionMultiplier: 1.25,
    ageRequirement: AgeEnum.DARK,
    cost: {
        food: 100,
        wood: 50,
    },
    queueTime: 25,
};
var WoodUpgrade_2 = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 150,
        wood: 100,
    },
    queueTime: 50,
};
var WoodUpgrade_3 = {
    productionMultiplier: 1.75,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 250,
        wood: 150,
    },
    queueTime: 75,
};
var WoodUpgrade_4 = {
    productionMultiplier: 2,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 400,
        wood: 300,
    },
    queueTime: 100,
};
export var LumberCamp = {
    name: 'Lumber Camp',
    ageRequirement: AgeEnum.DARK,
    cost: {
        wood: 100,
    },
    baseHp: 600,
    wallHpBonus: 0,
    queueTime: 35,
    upgrade: [WoodUpgrade_1, WoodUpgrade_2, WoodUpgrade_3, WoodUpgrade_4],
};
