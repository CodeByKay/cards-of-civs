import { generateUnitGroup, UnitGroup } from "../interfaces/unit";
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
const unitGroups: { [key: string]: UnitGroup } = {
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
for (let [attackerName, attackerGroup] of Object.entries(unitGroups)) {
    for (let [defenderName, defenderGroup] of Object.entries(unitGroups)) {
        console.log(`${attackerName} vs ${defenderName}:`);            
        let round = 0;

        while (attackerGroup.currentHp > 0 && defenderGroup.currentHp > 0) {               
            round += 1;
            [attackerGroup, defenderGroup] = resolveDamage(attackerGroup, defenderGroup);

            console.log(`  Round ${round}: ${attackerName}: ${attackerGroup.currentHp} vs ${defenderName}: ${defenderGroup.currentHp}`);
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