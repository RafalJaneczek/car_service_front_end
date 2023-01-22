import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarDetailsComponent} from './component/car-details/car-details.component';
import {CarResolve} from './service/car-resolve.service';
import {AuthGuard} from "../../auth/service/auth-guard.service";

const CARS_ROUTES: Routes = [
  {
    path: 'car-form/edit/:id',
    component: CarDetailsComponent,
    resolve: {car: CarResolve},
    canActivate: [AuthGuard],
    data: {
      role: ['ROLE_MOD']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(CARS_ROUTES)],
  exports: [RouterModule]
})
export class CarRoutingModule {
}
