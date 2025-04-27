import { AgeEnum } from "../../enum/ageEnum";
import { TownCenterBuilding } from "../../interfaces/townCenterBuilding";
import { Upgrade } from "../../interfaces/upgrade";
import { Villager } from "../indexUnits";

const FeudalUpgrade: Upgrade = {
    ageRequirement: AgeEnum.DARK,
    cost: {
        food: 500,
    },
    queueTime: 130,
}

const CastleUpgrade: Upgrade = {
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        food: 800,
        gold: 200,
    },
    queueTime: 160,
}

const ImperialUpgrade: Upgrade = {
    ageRequirement: AgeEnum.CASTLE,
    cost: {
        food: 1000,
        gold: 800,
    },
    queueTime: 190,
}

export const TownCenter: TownCenterBuilding = {
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
}
