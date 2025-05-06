// import { BaseUnit } from "../interfaces/unit";
// import { UnitEnum } from "../enum/unitEnum";

// class UnitRegistry {
//     private static instance: UnitRegistry;
//     public units: Map<UnitEnum, BaseUnit> = new Map();

//     private constructor() {}

//     static getInstance(): UnitRegistry {
//         if (!UnitRegistry.instance) {
//             UnitRegistry.instance = new UnitRegistry();
//         }
//         return UnitRegistry.instance;
//     }

//     registerUnit(unitEnum: UnitEnum, unit: BaseUnit) {
//         this.units.set(unitEnum, unit);
//     }

//     getUnit(unitEnum: UnitEnum): BaseUnit {
//         const unit = this.units.get(unitEnum);
//         if (!unit) {
//             throw new Error(`Unit ${UnitEnum[unitEnum]} not registered`);
//         }
//         return unit;
//     }
// }

// export const unitRegistry = UnitRegistry.getInstance(); 