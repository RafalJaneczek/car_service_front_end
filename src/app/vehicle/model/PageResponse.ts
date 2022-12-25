import {Vehicle} from '../vehicle';

export interface PageResponse<T extends Vehicle> {
  vehicles: T[];
  totalPages: number;
}
