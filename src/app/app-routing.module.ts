import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from './vehicle/car/cars-list/cars-list.component';
import {CarFormComponent} from './vehicle/car/car-from/car-form.component';
import {MotorcycleFormComponent} from './vehicle/motorcycle/motorcycle-form/motorcycle-form.component';
import {MotorcyclesListComponent} from './vehicle/motorcycle/motorcycles-list/motorcycles-list.component';
import {SignUpComponent} from './auth/register/sign-up.component';
import {LoginComponent} from './auth/login/login.component';

const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cars', component: CarsListComponent},
  {path: 'motorcycles', component: MotorcyclesListComponent},
  {path: 'add-car', component: CarFormComponent},
  {path: 'add-motorcycle', component: MotorcycleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
