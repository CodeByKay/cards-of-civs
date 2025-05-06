import { modifyUnitGroup } from "../interfaces/unit";
// Damage = Base Damage + Counter Damage + Speed Difference + Range Difference
// Calculate damage based on the attacking unit group's statistics
function calculateDamage(attackerGroup, defenderGroup) {
    var totalDamage = attackerGroup.unit.baseDamage;
    // Calculate counter damage based on the enemy unit type
    console.log("".concat(attackerGroup.unit.name, " counters"));
    console.log('Counter damage array:', attackerGroup.unit.counterDamage);
    console.log('Defender unit:', defenderGroup.unit.name);
    for (var _i = 0, _a = attackerGroup.unit.counterDamage; _i < _a.length; _i++) {
        var counter = _a[_i];
        console.log('Checking counter:', counter);
        console.log('Counter unit:', counter.unitEnum);
        if (counter.unitEnum === defenderGroup.unit.unitEnum) {
            totalDamage += counter.damage;
            console.log("".concat(attackerGroup.unit.name, " counters ").concat(defenderGroup.unit.name, " for ").concat(counter.damage));
            break;
        }
    }
    // Calculate speed difference
    var speedDifference = attackerGroup.unit.speed - defenderGroup.unit.speed;
    // Calculate range difference
    var rangeDifference = attackerGroup.unit.range - defenderGroup.unit.range;
    // Add speed and range differences to total damage
    totalDamage += speedDifference + rangeDifference;
    return totalDamage * attackerGroup.count;
}
// Calculate damage between two armies and return the updated states
export function resolveDamage(army1, army2) {
    var damageToArmy2 = calculateDamage(army1, army2);
    var damageToArmy1 = calculateDamage(army2, army1);
    var updatedArmy1 = modifyUnitGroup(army1, damageToArmy1);
    var updatedArmy2 = modifyUnitGroup(army2, damageToArmy2);
    // console.log(`  ${army1.unit.name} (${army1.count}) took ${damageToArmy1} damage resulting in ${updatedArmy1.unit.name} (${updatedArmy1.count})`);
    // console.log(`  ${army2.unit.name} (${army2.count}) took ${damageToArmy2} damage resulting in ${updatedArmy2.unit.name} (${updatedArmy2.count})`);
    return [updatedArmy1, updatedArmy2];
}
