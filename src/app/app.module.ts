import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core-module/core-module';
import {FormsModule} from '@angular/forms';
import {CarRoutingModule} from './vehicle/car/car-routing.module';
import {ModalComponent} from './core-module/modal/modal.component';
import {MotorcycleModule} from './vehicle/motorcycle/Motorcycle-module';
import {authInterceptorProviders} from './auth/helper/AuthInterceptor';
import {AuthModule} from './auth/auth.module';
import {CarModule} from './vehicle/car/car.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    CarRoutingModule,
    MotorcycleModule,
    CarModule,
    AuthModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
