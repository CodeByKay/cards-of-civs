import { MilitaryBuilding } from "../interfaces/military";
import { Production } from "../interfaces/production";
import { TownCenterBuilding } from "../interfaces/townCenterBuilding";
import { generateUnitGroup, UnitGroup } from "../interfaces/unit";
import { Action } from "../interfaces/action";
import { AgeEnum } from "../enum/ageEnum";
import { TownCenter } from "../data/indexBuildings";
import { Villager } from "../data/indexUnits";

export class Player {
    name: string;

    age: AgeEnum;
    food: number;
    wood: number;
    gold: number;
    stone: number;

    townCenter: TownCenterBuilding;
    foodProduction!: Production;
    woodProduction!: Production;
    goldProduction!: Production;
    stoneProduction!: Production;

    militaryBuildings: MilitaryBuilding[];
    army: UnitGroup[];

    actionQueue: Action[];
    militaryQueue: Action[];

    constructor(name: string) {
        this.name = name;

        this.age = AgeEnum.DARK;
        this.food = 200;
        this.wood = 200;
        this.gold = 200;
        this.stone = 200;

        this.townCenter = TownCenter;

        this.militaryBuildings = [];
        this.army = [];

        this.actionQueue = [];
        this.militaryQueue = [];

        this.initializeProduction();
    }

    initializeProduction() {
        this.foodProduction = {
            villagers: generateUnitGroup(Villager, 2),
            productionRate: 5,
        };

        this.woodProduction = {
            villagers: generateUnitGroup(Villager, 1),
            productionRate: 5,
        };

        this.goldProduction = {
            villagers: generateUnitGroup(Villager, 0),
            productionRate: 5,
        };

        this.stoneProduction = {
            villagers: generateUnitGroup(Villager, 0),
            productionRate: 5,
        };
    }
}