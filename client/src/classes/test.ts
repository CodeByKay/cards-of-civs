import { generateUnitGroup, UnitGroup } from "../interfaces/unit.js";
import { resolveDamage } from "../classes/DamageCalculation.js";
import { Archer_1 } from "../data/units/Archer.js";
import { Camel_1 } from "../data/units/Camel.js";
import { CavalryArcher_1, CavalryArcher_2 } from "../data/units/CavalryArcher.js";
import { Elephant_1 } from "../data/units/Elephant.js";
import { Knight_1 } from "../data/units/Knight.js";
import { Scout_1 } from "../data/units/Scout.js";
import { SiegeRam_1 } from "../data/units/SiegeRam.js";
import { Skirmisher_1, Skirmisher_2, Skirmisher_3 } from "../data/units/Skirmisher.js";
import { Swordsman_1 } from "../data/units/Swordsman.js";
import { Trebuchet } from "../data/units/Trebuchet.js";
import { Spearman_1, Spearman_2, Spearman_3 } from "../data/units/Spearman.js";

// Create unit groups with a count of 1 for each level 1 unit
const unitGroups: UnitGroup[] = [
    generateUnitGroup(CavalryArcher_1, 1),
    generateUnitGroup(Spearman_1, 1),
    generateUnitGroup(CavalryArcher_2, 1),
    generateUnitGroup(Spearman_2, 1),
    generateUnitGroup(Spearman_3, 1),
];

// Calculate damage for each unit against every other unit
for (let i = 0; i < unitGroups.length; i++) {
    for (let j = 0; j < unitGroups.length; j++) {
        // Skip self-matches
        if (i >= j) continue;

        let attackerGroup = unitGroups[i];
        let defenderGroup = unitGroups[j];

        const attackerName = `${attackerGroup.unit.name} <${attackerGroup.unit.level}>`;
        const defenderName = `${defenderGroup.unit.name} <${defenderGroup.unit.level}>`;

        console.log(`${attackerName} vs ${defenderName}:`);            
        let round = 0;
        console.log(`  Start Battle: ${attackerName}: ${attackerGroup.currentHp} vs ${defenderName}: ${defenderGroup.currentHp}`);

        while (attackerGroup.currentHp > 0 && defenderGroup.currentHp > 0) {               
            round += 1;
            [attackerGroup, defenderGroup] = resolveDamage(attackerGroup, defenderGroup);

            console.log(`  Round ${round} result: ${attackerName}: ${attackerGroup.count} (${attackerGroup.currentHp}) vs ${defenderName}: ${defenderGroup.count} (${defenderGroup.currentHp})`);
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