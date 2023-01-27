import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared-module/shared-module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MotorcycleFormComponent} from './motorcycle-form/motorcycle-form.component';
import {MotorcycleService} from './service/motorcycle.service';
import {MotorcyclesListComponent} from './motorcycles-list/motorcycles-list.component';


@NgModule({
  exports: [MotorcyclesListComponent],
  providers: [MotorcycleService],
  declarations: [MotorcycleFormComponent, MotorcyclesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MotorcycleModule {
}
