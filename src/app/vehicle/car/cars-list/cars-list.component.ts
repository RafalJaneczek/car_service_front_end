import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Car} from '../model/car';
import {CarService} from '../service/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {

  cars: Car[];

  constructor(private carsService: CarService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadCars();
  }

  public removeCar(car: Car, event: Event) {
    event.stopPropagation();
    this.carsService.remove(car.id).subscribe(() => {
      this.loadCars();
    })
  }

  public goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

  private loadCars(): void {
    this.carsService.findAll().subscribe((cars) => {
      this.cars = cars;
    });
  }

}
