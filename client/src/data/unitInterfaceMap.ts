import { UnitEnum } from '../enum/unitEnum';
import { Archer } from './units/Archer';
import { Camel } from './units/Camel';
import { CavalryArcher } from './units/CavalryArcher';
import { Elephant } from './units/Elephant';
import { Knight } from './units/Knight';
import { Scout } from './units/Scout';
import { SiegeRam } from './units/SiegeRam';
import { Skirmisher } from './units/Skirmisher';
import { Spearman } from './units/Spearman';
import { Swordsman } from './units/Swordsman';
import { Trebuchet } from './units/Trebuchet';
import { Villager } from './units/Villager';
import { BaseUnit } from '../interfaces/unit';

export const UnitEnumToInterface: { [key in UnitEnum]: BaseUnit } = {
    [UnitEnum.ARCHER]: Archer,
    [UnitEnum.CAMEL]: Camel,
    [UnitEnum.CAVALRY_ARCHER]: CavalryArcher,
    [UnitEnum.ELEPHANT]: Elephant,
    [UnitEnum.KNIGHT]: Knight,
    [UnitEnum.SCOUT]: Scout,
    [UnitEnum.SIEGE_RAM]: SiegeRam,
    [UnitEnum.SKIRMISHER]: Skirmisher,
    [UnitEnum.SPEARMAN]: Spearman,
    [UnitEnum.SWORDSMAN]: Swordsman,
    [UnitEnum.TREBUCHET]: Trebuchet,
    [UnitEnum.VILLAGER]: Villager,
}; 