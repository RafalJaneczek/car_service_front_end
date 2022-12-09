import {Component, OnInit} from '@angular/core';
import {CarsService} from '../service/cars.service';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../model/car';

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {

  car: Car;

  constructor(private carsService: CarsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar() {
    this.car = this.route.snapshot.data['car']
  }

}
