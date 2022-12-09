import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsModule} from './vehicle/car/cars.module';
import {HttpClientModule} from "@angular/common/http";
import {CarsService} from "./vehicle/car/service/cars.service";
import {CoreModule} from "./core-module/core-module";
import {FormsModule} from "@angular/forms";
import {CarsRoutingModule} from "./vehicle/car/cars-routing.module";
import {ModalComponent} from './core-module/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    CarsRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
