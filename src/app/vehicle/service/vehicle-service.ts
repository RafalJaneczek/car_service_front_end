import {Vehicle} from "../vehicle";
import {Observable} from "rxjs";
import {PageResponse} from "../model/PageResponse";

export interface VehicleService<T extends Vehicle> {

  findAll(): Observable<PageResponse<Vehicle>>;

  findById(id: number): Observable<Vehicle>;

  add(data: any): Observable<Vehicle>;

  update(id: number, data: Vehicle): Observable<Vehicle>;

  remove(id: number): Observable<Vehicle>;

}
