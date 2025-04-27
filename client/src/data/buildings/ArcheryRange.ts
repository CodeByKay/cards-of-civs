import { AgeEnum } from "../../enum/ageEnum";
import { MilitaryBuilding } from "../../interfaces/military";
import { Archer, CavalryArcher, Skirmisher } from "../indexUnits";

export const ArcheryRange: MilitaryBuilding = {
    name: 'Archery Range',
    ageRequirement: AgeEnum.FEUDAL,
    cost: {
        wood: 175,
    },
    baseHp: 1500,
    wallHpBonus: 0,
    queueTime: 50,

    units: [Archer, Skirmisher, CavalryArcher],
    damage: 10,
    range: 3,
    speed: 0,
}
