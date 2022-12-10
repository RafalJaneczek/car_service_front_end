import {Vehicle} from "../vehicle";
import {Observable} from "rxjs";

export interface VehicleService<T extends Vehicle> {

  findAll(): Observable<Vehicle[]>;

  findById(id: number): Observable<Vehicle>;

  add(data: any): Observable<Vehicle>;

  update(id: number, data: Vehicle): Observable<Vehicle>;

  remove(id: number): Observable<Vehicle>;

}
