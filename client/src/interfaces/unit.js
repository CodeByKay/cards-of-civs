var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export function generateUnitGroup(unit, count) {
    return {
        unit: unit,
        count: count,
        currentHp: unit.hp * count,
    };
}
export function modifyUnitGroup(unitGroup, damage) {
    if (unitGroup.currentHp <= damage) {
        return __assign(__assign({}, unitGroup), { currentHp: 0, count: 0 });
    }
    var newCurrentHp = unitGroup.currentHp - damage;
    var newCount = Math.ceil(newCurrentHp / unitGroup.unit.hp);
    return __assign(__assign({}, unitGroup), { currentHp: newCurrentHp, count: newCount });
}
