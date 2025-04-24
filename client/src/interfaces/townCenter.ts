import { BaseBuilding } from './building';
import { BaseUnit } from './unit';
import { Upgrade } from './upgrade';

export interface TownCenter extends BaseBuilding {
	ageUpgrades: Upgrade[];
	units: BaseUnit[];
	damage: number;
} 