import { BaseBuilding } from './building';
import { AgeEnum } from '../../enum/ageEnum';
import { ResourceEnum } from '../../enum/resourcesEnum';

export interface TownCenter extends BaseBuilding {
	ageUpgrades: {
		age: AgeEnum;
		cost: {
			type: ResourceEnum;
			amount: number;
		}[];
		queueTime: number;
	}[];
	units: [];
	damage: number;
} 