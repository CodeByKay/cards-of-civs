import { AgeEnum } from "../enum/ageEnum";
import { UnitEnum } from "../enum/unitEnum";
import { Cost } from "./cost";
import { CounterDamage } from "./counterDamage";
import { Upgrade } from "./upgrade";

export interface BaseUnit {
    name: string;
    unitEnum: UnitEnum;
    ageRequirement: AgeEnum | null;
    cost: Cost;
    hp: number;
    queueTime: number;
    upgrade: Upgrade | null;
    level: number;
    baseDamage: number;
    structureDamage: number;
    counterDamage: CounterDamage[];
    range: number;
    speed: number;
}

export interface UnitGroup {
    unit: BaseUnit;
    count: number;
    currentHp: number;
}

export function generateUnitGroup(unit: BaseUnit, count: number): UnitGroup {
    return {
        unit,
        count,
        currentHp: unit.hp * count,
    };
}

export function modifyUnitGroup(unitGroup: UnitGroup, damage: number): UnitGroup {
    if (unitGroup.currentHp <= damage) {
        return {
            ...unitGroup,
            currentHp: 0,
            count: 0,
        };   
    }

    const newCurrentHp = unitGroup.currentHp - damage;
    const newCount = Math.ceil(newCurrentHp / unitGroup.unit.hp);

    return {
        ...unitGroup,
        currentHp: newCurrentHp,
        count: newCount,
    };
}