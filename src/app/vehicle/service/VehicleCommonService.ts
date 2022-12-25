import {EventEmitter, Injectable, Output} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VehicleCommonService {

  @Output()
  refreshVehicleListEvent = new EventEmitter<string>();

  constructor() {}

  public refreshVehicleList(status: string) {
    this.refreshVehicleListEvent.emit(status);
  }

}
