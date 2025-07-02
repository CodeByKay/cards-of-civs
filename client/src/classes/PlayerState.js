import { generateUnitGroup } from "../interfaces/unit.js";
import { AgeEnum } from "../enum/ageEnum.js";
import { TownCenter } from "../data/indexBuildings.js";
import { Villager } from "../data/indexUnits.js";
var Player = /** @class */ (function () {
    function Player(name) {
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
    Player.prototype.initializeProduction = function () {
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
    };
    return Player;
}());
export { Player };
