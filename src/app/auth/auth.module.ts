import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthService} from './service/auth.service';
import {AuthInterceptor} from './helper/AuthInterceptor';
import {SignUpComponent} from './register/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthInterceptor,
    AuthService
  ]
})
export class AuthModule {
}
