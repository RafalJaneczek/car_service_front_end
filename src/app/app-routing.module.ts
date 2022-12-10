import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from "./vehicle/car/cars-list/cars-list.component";
import {CarFormComponent} from "./vehicle/car/car-from/car-form.component";
import {MotorcycleFormComponent} from "./vehicle/motorcycle/motorcycle-form/motorcycle-form.component";

const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  {path: 'cars', component: CarsListComponent},
  {path: 'add-car', component: CarFormComponent},
  {path: 'add-motorcycle', component: MotorcycleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
