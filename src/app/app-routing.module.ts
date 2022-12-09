import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from "./vehicle/car/cars-list/cars-list.component";
import {CarFormComponent} from "./vehicle/car/car-from/car-form.component";

const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  {path: 'cars', component: CarsListComponent},
  {path: 'add-car', component: CarFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
