import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuilding } from "../../interfaces/military";
import { Scout, Knight, Camel, Elephant } from "../indexUnits";

export const Stable: MilitaryBuilding = {
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
}
