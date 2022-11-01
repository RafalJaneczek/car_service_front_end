import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Car} from "./models/car";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl = "http://localhost:3000/api/cars";

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl)
      .pipe(map((response: Car[]) => {
        return response as Car[];
      }))
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.apiUrl + `/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  addCar(data: any): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  updateCar(id: number, data: Car): Observable<Car> {
    return this.http.put<Car>(this.apiUrl + `/${id}`, data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  removeCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.apiUrl + `/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

}
