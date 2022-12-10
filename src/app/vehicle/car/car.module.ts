import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsListComponent} from './cars-list/cars-list.component';
import {SharedModule} from '../../shared-module/shared-module';
import {CarDetailsComponent} from './car-details/car-details.component';
import {RouterModule} from '@angular/router';
import {CarResolve} from './service/car-resolve.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CarFormComponent} from './car-from/car-form.component';


@NgModule({
  exports: [CarsListComponent],
  providers: [
    CarResolve
  ],
  declarations: [
    CarsListComponent,
    CarDetailsComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CarModule {
}
