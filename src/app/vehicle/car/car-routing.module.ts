import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarDetailsComponent} from './component/car-details/car-details.component';
import {CarResolve} from './service/car-resolve.service';
import {AuthGuard} from '../../auth/service/auth-guard.service';
import {CarAddComponent} from './component/car-add/car-add.component';

const CARS_ROUTES: Routes = [
  {
    path: 'car-form/edit/:id',
    component: CarDetailsComponent,
    resolve: {car: CarResolve},
    canActivate: [AuthGuard],
    data: {
      role: ['ROLE_MOD']
    }
  },
  {
    path: 'car-form/add',
    component: CarAddComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['ROLE_ADMIN']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(CARS_ROUTES)],
  exports: [RouterModule]
})
export class CarRoutingModule {
}
