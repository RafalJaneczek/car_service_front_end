import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {apiUrl} from "../../../global-variables";
import {VehicleService} from "../../service/vehicle-service";
import {Motorcycle} from "../model/motorcycle";
import {Injectable} from "@angular/core";
import {PageResponse} from "../../model/PageResponse";

@Injectable()
export class MotorcycleService implements VehicleService<Motorcycle> {

  private readonly motorcycleApiUrl: string = apiUrl + '/motorcycle';

  constructor(private http: HttpClient) {}

  findAll(): Observable<PageResponse<Motorcycle>> {
    return this.http.get<PageResponse<Motorcycle>>(this.motorcycleApiUrl + '/get-all')
      .pipe(map((response: PageResponse<Motorcycle>) => {
        return response as PageResponse<Motorcycle>;
      }))
  }

  findById(id: number): Observable<Motorcycle> {
    return this.http.get<Motorcycle>(this.motorcycleApiUrl + `/get/${id}`)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

  add(data: any): Observable<Motorcycle> {
    console.log(data);
    return this.http.post<Motorcycle>(this.motorcycleApiUrl + '/add', data)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

  update(id: number, data: Motorcycle): Observable<Motorcycle> {
    return this.http.put<Motorcycle>(this.motorcycleApiUrl + `/update/${id}`, data)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

  remove(id: number): Observable<Motorcycle> {
    return this.http.delete<Motorcycle>(this.motorcycleApiUrl + `/remove/${id}`)
      .pipe(map((response: Motorcycle) => {
        return response as Motorcycle;
      }))
  }

}
