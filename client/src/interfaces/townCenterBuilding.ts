import { BaseBuilding } from './building';
import { BaseUnit } from './unit';
import { Upgrade } from './upgrade';

export interface TownCenterBuilding extends BaseBuilding {
	ageUpgrades: Upgrade[];
	units: BaseUnit[];
	damage: number;
	range: number;
    speed: number;
} 