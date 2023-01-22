import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from './vehicle/car/component/cars-list/cars-list.component';
import {MotorcycleFormComponent} from './vehicle/motorcycle/motorcycle-form/motorcycle-form.component';
import {MotorcyclesListComponent} from './vehicle/motorcycle/motorcycles-list/motorcycles-list.component';
import {SignUpComponent} from './auth/component/register/sign-up.component';
import {LoginComponent} from './auth/component/login/login.component';
import {CarAddComponent} from './vehicle/car/component/car-add/car-add.component';
import {AuthGuard} from './auth/service/auth-guard.service';
import {NoPermissionComponent} from './auth/component/no-permission/no-permission.component';

const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cars', component: CarsListComponent},
  {
    path: 'motorcycles',
    component: MotorcyclesListComponent
  },
  {
    path: 'car-form/add',
    component: CarAddComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'add-motorcycle',
    component: MotorcycleFormComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['ROLE_ADMIN']
    }
  },
  {path: 'no-permission', component: NoPermissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
