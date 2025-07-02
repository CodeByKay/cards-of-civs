var _a;
import { generateUnitGroup } from "../interfaces/unit.js";
import { resolveDamage } from "../classes/DamageCalculation.js";
import { CavalryArcher_1, CavalryArcher_2 } from "../data/units/CavalryArcher.js";
import { Spearman_1, Spearman_2, Spearman_3 } from "../data/units/Spearman.js";
// Create unit groups with a count of 1 for each level 1 unit
var unitGroups = [
    generateUnitGroup(CavalryArcher_1, 1),
    generateUnitGroup(Spearman_1, 1),
    generateUnitGroup(CavalryArcher_2, 1),
    generateUnitGroup(Spearman_2, 1),
    generateUnitGroup(Spearman_3, 1),
];
// Calculate damage for each unit against every other unit
for (var i = 0; i < unitGroups.length; i++) {
    for (var j = 0; j < unitGroups.length; j++) {
        // Skip self-matches
        if (i >= j)
            continue;
        var attackerGroup = unitGroups[i];
        var defenderGroup = unitGroups[j];
        var attackerName = "".concat(attackerGroup.unit.name, " <").concat(attackerGroup.unit.level, ">");
        var defenderName = "".concat(defenderGroup.unit.name, " <").concat(defenderGroup.unit.level, ">");
        console.log("".concat(attackerName, " vs ").concat(defenderName, ":"));
        var round = 0;
        console.log("  Start Battle: ".concat(attackerName, ": ").concat(attackerGroup.currentHp, " vs ").concat(defenderName, ": ").concat(defenderGroup.currentHp));
        while (attackerGroup.currentHp > 0 && defenderGroup.currentHp > 0) {
            round += 1;
            _a = resolveDamage(attackerGroup, defenderGroup), attackerGroup = _a[0], defenderGroup = _a[1];
            console.log("  Round ".concat(round, " result: ").concat(attackerName, ": ").concat(attackerGroup.count, " (").concat(attackerGroup.currentHp, ") vs ").concat(defenderName, ": ").concat(defenderGroup.count, " (").concat(defenderGroup.currentHp, ")"));
        }
        // Determine the outcome
        // if (attackerGroup.currentHp <= 0) {
        //     console.log(`${attackerName} has been defeated!`);
        // } else {
        //     console.log(`${defenderName} has been defeated!`);
        // }
        console.log('  -----------------------------------');
    }
}
