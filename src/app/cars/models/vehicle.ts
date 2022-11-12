import {VehicleCondition} from '../enums/vehicle-condition';

export interface Vehicle {
  id: number;
  mark: string;
  model: string;
  engineCapacity: number;
  enginePower: number;
  course: number;
  vehicleCondition: VehicleCondition;
  damaged: boolean;
  price: number;
}
