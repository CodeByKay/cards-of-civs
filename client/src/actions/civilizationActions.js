// Age Up
// Generate Villagers
// Build Production Buildings
// Upgrade Production
// Build Military Buildings
// Build Walls
var CivilizationAction = /** @class */ (function () {
    function CivilizationAction(description, totalTime, originBuilding, cost) {
        this.description = description;
        this.totalTime = totalTime;
        this.remainingTime = totalTime;
        this.originBuilding = originBuilding;
        this.cost = cost;
    }
    CivilizationAction.prototype.action = function () {
        return true;
    };
    return CivilizationAction;
}());
export { CivilizationAction };
