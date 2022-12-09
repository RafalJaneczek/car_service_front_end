import {Vehicle} from '../../vehicle';

export interface Car extends Vehicle {
  engineType: string;
  bodyType: string;
  numberOfSeats: number;
}
