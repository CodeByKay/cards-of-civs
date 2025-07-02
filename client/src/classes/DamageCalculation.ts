import { modifyUnitGroup, UnitGroup } from "../interfaces/unit.js";

// Damage = Base Damage + Counter Damage + Speed Difference + Range Difference

// Calculate damage based on the attacking unit group's statistics
function calculateDamage(attackerGroup: UnitGroup, defenderGroup: UnitGroup): number {
    let totalDamage = attackerGroup.unit.baseDamage;

    // Calculate counter damage based on the enemy unit type
    // console.log(`${attackerGroup.unit.name} counters`);
    // console.log('Counter damage array:', attackerGroup.unit.counterDamage);
    // console.log('Defender unit:', defenderGroup.unit.name);

    for (const counter of attackerGroup.unit.counterDamage) {
        // console.log('Checking counter:', counter);
        // console.log('Counter unit:', counter.unitEnum);
        if (counter.unitEnum === defenderGroup.unit.unitEnum) {
            totalDamage += counter.damage;
            console.log(`${attackerGroup.unit.name} counters ${defenderGroup.unit.name} for ${counter.damage}`);
            break;
        }
    }

    // Calculate speed difference
    const speedDifference = attackerGroup.unit.speed - defenderGroup.unit.speed;

    // Calculate range difference
    const rangeDifference = attackerGroup.unit.range - defenderGroup.unit.range;

    // Add speed and range differences to total damage
    const individualDamage = totalDamage + speedDifference + rangeDifference;
    const groupDamage = individualDamage * attackerGroup.count;

    console.log(`[Damage (${totalDamage}) + Speed (${speedDifference}) + Range (${rangeDifference})] * Units (${attackerGroup.count}) = ${groupDamage}`);

    return groupDamage;
}

// Calculate damage between two armies and return the updated states
export function resolveDamage(army1: UnitGroup, army2: UnitGroup): [UnitGroup, UnitGroup] {
    const damageToArmy2 = calculateDamage(army1, army2);
    const damageToArmy1 = calculateDamage(army2, army1);

    const updatedArmy1 = modifyUnitGroup(army1, damageToArmy1);
    const updatedArmy2 = modifyUnitGroup(army2, damageToArmy2);

    // console.log(`  ${army1.unit.name} (${army1.count}) took ${damageToArmy1} damage resulting in ${updatedArmy1.unit.name} (${updatedArmy1.count})`);
    // console.log(`  ${army2.unit.name} (${army2.count}) took ${damageToArmy2} damage resulting in ${updatedArmy2.unit.name} (${updatedArmy2.count})`);

    return [updatedArmy1, updatedArmy2];
}