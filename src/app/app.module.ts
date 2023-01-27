import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CarRoutingModule} from './vehicle/car/car-routing.module';
import {MotorcycleModule} from './vehicle/motorcycle/Motorcycle-module';
import {authInterceptorProviders} from './auth/helper/AuthInterceptor';
import {AuthModule} from './auth/auth.module';
import {CarModule} from './vehicle/car/car.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import {SharedModule} from './shared-module/shared-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarRoutingModule,
    MotorcycleModule,
    CarModule,
    AuthModule,
    SharedModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
