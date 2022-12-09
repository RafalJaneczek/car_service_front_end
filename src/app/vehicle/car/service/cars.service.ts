import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Car} from '../model/car';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8083/car';
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl + '/get-all')
      .pipe(map((response: Car[]) => {
        return response as Car[];
      }))
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.apiUrl + `/get/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  addCar(data: any): Observable<Car> {
    return this.http.post<Car>(this.apiUrl + '/add', data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  updateCar(id: number, data: Car): Observable<Car> {
    return this.http.put<Car>(this.apiUrl + `/update/${id}`, data)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

  removeCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.apiUrl + `/remove/${id}`)
      .pipe(map((response: Car) => {
        return response as Car;
      }))
  }

}
