import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'cs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  vehicleFormsActionBarsShown: boolean = false;
  vehiclesListActionBarsShown: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public showVehicleActionBars(): void {
    this.vehicleFormsActionBarsShown = !this.vehicleFormsActionBarsShown;
  }
  public showVehiclesListActionBars(): void {
    this.vehiclesListActionBarsShown = !this.vehiclesListActionBarsShown;
  }


}
