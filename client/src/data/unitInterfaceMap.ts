import { UnitEnum } from '../enum/unitEnum.js';
import { Archer } from './units/Archer.js';
import { Camel } from './units/Camel.js';
import { CavalryArcher } from './units/CavalryArcher.js';
import { Elephant } from './units/Elephant.js';
import { Knight } from './units/Knight.js';
import { Scout } from './units/Scout.js';
import { SiegeRam } from './units/SiegeRam.js';
import { Skirmisher } from './units/Skirmisher.js';
import { Spearman } from './units/Spearman.js';
import { Swordsman } from './units/Swordsman.js';
import { Trebuchet } from './units/Trebuchet.js';
import { Villager } from './units/Villager.js';
import { BaseUnit } from '../interfaces/unit.js';

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