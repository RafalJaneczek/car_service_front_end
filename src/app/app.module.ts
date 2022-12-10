import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarModule} from './vehicle/car/car.module';
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "./vehicle/car/service/car.service";
import {CoreModule} from "./core-module/core-module";
import {FormsModule} from "@angular/forms";
import {CarRoutingModule} from "./vehicle/car/car-routing.module";
import {ModalComponent} from './core-module/modal/modal.component';
import {MotorcycleModule} from "./vehicle/motorcycle/Motorcycle-module";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    CarRoutingModule,
    MotorcycleModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
