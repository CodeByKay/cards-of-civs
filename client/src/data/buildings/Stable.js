import { AgeEnum } from "../../enum/ageEnum";
import { Scout, Knight, Camel, Elephant } from "../indexUnits";
export var Stable = {
    name: 'Stable',
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        wood: 175,
    },
    baseHp: 1500,
    wallHpBonus: 0,
    queueTime: 50,
    units: [Scout, Knight, Camel, Elephant],
    damage: 10,
    range: 1,
    speed: 5,
};
