import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Car} from '../model/car';
import {HttpClient} from '@angular/common/http';
import {VehicleService} from "../../service/vehicle-service";
import {apiUrl} from "../../../global-variables";
import {PageResponse} from "../../model/PageResponse";

@Injectable({
  providedIn: 'root'
})
export class CarService implements VehicleService<Car> {

  private readonly carApiUrl: string = apiUrl + '/car';

  constructor(private http: HttpClient) {}

  findAll(pageNo?: number, pageSize?: number, sortBy?: string): Observable<PageResponse<Car>> {
    return this.http.get<PageResponse<Car>>(this.carApiUrl + `/get-all?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`)
      .pipe(map((response: PageResponse<Car>) => {
        return response as PageResponse<Car>;
      }))
  }

  findById(id: number): Observable<Car> {
    return this.http.get<Car>(this.carApiUrl + `/get/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  add(data: any): Observable<Car> {
    return this.http.post<Car>(this.carApiUrl + '/add', data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  update(id: number, data: Car): Observable<Car> {
    return this.http.put<Car>(this.carApiUrl + `/update/${id}`, data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  remove(id: number): Observable<Car> {
    return this.http.delete<Car>(this.carApiUrl + `/remove/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

}
