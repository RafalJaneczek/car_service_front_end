import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarDetailsComponent} from "./car-details/car-details.component";
import {CarResolve} from "./service/car-resolve.service";

const CARS_ROUTES: Routes = [
  {
    path: 'cars/:id',
    component: CarDetailsComponent,
    resolve: {car: CarResolve}
  }
];

@NgModule({
  imports: [RouterModule.forChild(CARS_ROUTES)],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
