import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Car} from '../model/car';
import {HttpClient} from '@angular/common/http';
import {VehicleService} from "../../service/vehicle-service";
import {API_URL} from "../../../global-variables";
import {PageResponse} from "../../model/PageResponse";

const CAR_API_URL: string = API_URL + '/car';

@Injectable({
  providedIn: 'root'
})
export class CarService implements VehicleService<Car> {

  constructor(private http: HttpClient) {}

  findAll(pageNo?: number, pageSize?: number, sortBy?: string): Observable<PageResponse<Car>> {
    return this.http.get<PageResponse<Car>>(CAR_API_URL + `/get-all?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`)
      .pipe(map((response: PageResponse<Car>) => {
        return response as PageResponse<Car>;
      }))
  }

  findById(id: number): Observable<Car> {
    return this.http.get<Car>(CAR_API_URL + `/get/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  add(data: Car): Observable<Car> {
    return this.http.post<Car>(CAR_API_URL + '/add', data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  update(id: number, data: Car): Observable<Car> {
    return this.http.put<Car>(CAR_API_URL + `/update/${id}`, data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  remove(id: number): Observable<Car> {
    return this.http.delete<Car>(CAR_API_URL + `/remove/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

}
