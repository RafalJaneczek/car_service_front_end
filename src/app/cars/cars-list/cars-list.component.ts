import {AfterViewInit, Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from "../total-cost/total-cost.component";
import {CarsService} from "../cars.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalComponent} from "../../core-module/modal/modal.component";

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
  , encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {

  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;
  totalCost: number = 0;
  grossCost: number = 0;
  cars: Car[];

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadCars();
  }


  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    })
  }

  removeCar(car: Car, event: Event) {
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    })
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id])
  }

  ngAfterViewInit(): void {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
