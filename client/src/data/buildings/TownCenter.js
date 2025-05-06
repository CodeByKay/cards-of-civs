import { AgeEnum } from "../../enum/ageEnum";
import { Villager } from "../indexUnits";
var FeudalUpgrade = {
    ageRequirement: AgeEnum.DARK,
    cost: {
        food: 500,
    },
    queueTime: 130,
};
var CastleUpgrade = {
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 800,
        gold: 200,
    },
    queueTime: 160,
};
var ImperialUpgrade = {
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 1000,
        gold: 800,
    },
    queueTime: 190,
};
export var TownCenter = {
    name: 'Town Center',
    ageRequirement: AgeEnum.DARK,
    cost: {},
    baseHp: 3000,
    wallHpBonus: 1000,
    queueTime: 0,
    ageUpgrades: [
        FeudalUpgrade,
        CastleUpgrade,
        ImperialUpgrade,
    ],
    units: [Villager],
    damage: 100,
    range: 5,
    speed: 0,
};
