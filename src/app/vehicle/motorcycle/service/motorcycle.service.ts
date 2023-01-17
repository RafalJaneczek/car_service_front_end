import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {API_URL} from '../../../global-variables';
import {VehicleService} from '../../service/vehicle-service';
import {Motorcycle} from '../model/motorcycle';
import {Injectable} from '@angular/core';
import {PageResponse} from '../../model/PageResponse';

const MOTORCYCLE_API_URL: string = API_URL + '/motorcycle';

@Injectable()
export class MotorcycleService implements VehicleService<Motorcycle> {

  constructor(private http: HttpClient) {}

  findAll(): Observable<PageResponse<Motorcycle>> {
    return this.http.get<PageResponse<Motorcycle>>(MOTORCYCLE_API_URL + '/get-all')
      .pipe(map((response: PageResponse<Motorcycle>) => {
        return response as PageResponse<Motorcycle>;
      }))
  }

  findById(id: number): Observable<Motorcycle> {
    return this.http.get<Motorcycle>(MOTORCYCLE_API_URL + `/get/${id}`)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

  add(data: any): Observable<Motorcycle> {
    console.log(data);
    return this.http.post<Motorcycle>(MOTORCYCLE_API_URL + '/add', data)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

  update(id: number, data: Motorcycle): Observable<Motorcycle> {
    return this.http.put<Motorcycle>(MOTORCYCLE_API_URL + `/update/${id}`, data)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

  remove(id: number): Observable<Motorcycle> {
    return this.http.delete<Motorcycle>(MOTORCYCLE_API_URL + `/remove/${id}`)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

}
