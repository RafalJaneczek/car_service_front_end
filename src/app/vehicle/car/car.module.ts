import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsListComponent} from './cars-list/cars-list.component';
import {SharedModule} from '../../shared-module/shared-module';
import {CarDetailsComponent} from './car-details/car-details.component';
import {RouterModule} from '@angular/router';
import {CarResolve} from './service/car-resolve.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarFormComponent} from './car-from/car-form.component';
import { CarAddComponent } from './car-add/car-add.component';


@NgModule({
  exports: [CarsListComponent],
  providers: [
    CarResolve
  ],
  declarations: [
    CarsListComponent,
    CarDetailsComponent,
    CarFormComponent,
    CarAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CarModule {
}
