import {Component, OnInit} from '@angular/core';
import {CarService} from '../../service/car.service';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../../model/car';

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {

  car: Car;

  constructor(private carsService: CarService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar() {
    this.car = this.route.snapshot.data['car']
  }

}
