var _a;
import { generateUnitGroup } from "../interfaces/unit";
import { resolveDamage } from "../classes/DamageCalculation";
import { Archer_1 } from "../data/units/Archer";
import { Camel_1 } from "../data/units/Camel";
import { CavalryArcher_1 } from "../data/units/CavalryArcher";
import { Elephant_1 } from "../data/units/Elephant";
import { Knight_1 } from "../data/units/Knight";
import { Scout_1 } from "../data/units/Scout";
import { SiegeRam_1 } from "../data/units/SiegeRam";
import { Skirmisher_1 } from "../data/units/Skirmisher";
import { Swordsman_1 } from "../data/units/Swordsman";
import { Trebuchet } from "../data/units/Trebuchet";
import { Spearman_1 } from "../data/units/Spearman";
// Create unit groups with a count of 1 for each level 1 unit
var unitGroups = {
    Archer: generateUnitGroup(Archer_1, 3),
    Camel: generateUnitGroup(Camel_1, 3),
    CavalryArcher: generateUnitGroup(CavalryArcher_1, 3),
    Elephant: generateUnitGroup(Elephant_1, 3),
    Knight: generateUnitGroup(Knight_1, 3),
    Scout: generateUnitGroup(Scout_1, 3),
    SiegeRam: generateUnitGroup(SiegeRam_1, 3),
    Skirmisher: generateUnitGroup(Skirmisher_1, 3),
    Swordsman: generateUnitGroup(Swordsman_1, 3),
    Spearman: generateUnitGroup(Spearman_1, 3),
    Trebuchet: generateUnitGroup(Trebuchet, 3),
};
// Calculate damage for each unit against every other unit
for (var _i = 0, _b = Object.entries(unitGroups); _i < _b.length; _i++) {
    var _c = _b[_i], attackerName = _c[0], attackerGroup = _c[1];
    for (var _d = 0, _e = Object.entries(unitGroups); _d < _e.length; _d++) {
        var _f = _e[_d], defenderName = _f[0], defenderGroup = _f[1];
        console.log("".concat(attackerName, " vs ").concat(defenderName, ":"));
        var round = 0;
        while (attackerGroup.currentHp > 0 && defenderGroup.currentHp > 0) {
            round += 1;
            _a = resolveDamage(attackerGroup, defenderGroup), attackerGroup = _a[0], defenderGroup = _a[1];
            console.log("  Round ".concat(round, ": ").concat(attackerName, ": ").concat(attackerGroup.currentHp, " vs ").concat(defenderName, ": ").concat(defenderGroup.currentHp));
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
