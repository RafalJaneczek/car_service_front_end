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
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgCircleProgressModule} from 'ng-circle-progress';

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
    ModalModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    NgCircleProgressModule.forRoot()
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
