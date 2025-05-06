// Generate Military
// Upgrade Military
// Attack Military
// Attack Military Buildings
// Attack Production Buildings
// Attack Production Zones
// Attack Town Center
var MilitaryAction = /** @class */ (function () {
    function MilitaryAction(description, totalTime, originBuilding, cost) {
        this.description = description;
        this.totalTime = totalTime;
        this.remainingTime = totalTime;
        this.originBuilding = originBuilding;
        this.cost = cost;
    }
    MilitaryAction.prototype.action = function () {
        return true;
    };
    return MilitaryAction;
}());
export { MilitaryAction };
