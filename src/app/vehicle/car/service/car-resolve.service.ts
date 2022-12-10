import {CarService} from './car.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Car} from '../model/car';
import {Injectable} from '@angular/core';

@Injectable()
export class CarResolve implements Resolve<Car> {

  constructor(private carService: CarService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.carService.findById(route.params['id'])
  }

}
