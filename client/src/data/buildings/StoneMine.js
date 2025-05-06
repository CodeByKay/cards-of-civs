import { AgeEnum } from "../../enum/ageEnum";
var StoneUpgrade_1 = {
    productionMultiplier: 1.1,
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 100,
        wood: 75,
    },
    queueTime: 30,
};
var StoneUpgrade_2 = {
    productionMultiplier: 1.25,
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 175,
        wood: 100,
    },
    queueTime: 75,
};
var StoneUpgrade_3 = {
    productionMultiplier: 1.5,
    ageRequirement: AgeEnum.IMPERIAL,
    cost: {
        food: 275,
        wood: 150,
    },
    queueTime: 125,
};
export var StoneMine = {
    name: 'Stone Mine',
    ageRequirement: AgeEnum.DARK,
    cost: {
        wood: 100,
    },
    baseHp: 600,
    wallHpBonus: 0,
    queueTime: 35,
    upgrade: [StoneUpgrade_1, StoneUpgrade_2, StoneUpgrade_3],
};
