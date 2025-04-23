import { BaseBuilding } from './building';
import { AgeEnum } from '../enum/ageEnum';
import { ResourceEnum } from '../enum/resourcesEnum';
import { BaseUnit } from './unit';
import { Upgrade } from './upgrade';

export interface TownCenter extends BaseBuilding {
	ageUpgrades: [Upgrade];
	units: [BaseUnit];
	damage: number;
} 