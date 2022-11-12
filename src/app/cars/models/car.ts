import {BodyType} from '../enums/car/body-type';
import {EngineType} from '../enums/car/engine-type';
import {Vehicle} from './vehicle';

export interface Car extends Vehicle {
  engineType: EngineType;
  bodyType: BodyType;
  numberOfSeats: number;
}
