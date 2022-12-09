import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Car} from '../model/car';
import {CarsService} from '../service/cars.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
  , encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {

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
    });
  }

  removeCar(car: Car, event: Event) {
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCars();
    })
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

}
