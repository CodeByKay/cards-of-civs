import { generateUnitGroup } from "../interfaces/unit";
import { AgeEnum } from "../enum/ageEnum";
import { TownCenter } from "../data/indexBuildings";
import { Villager } from "../data/indexUnits";
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
