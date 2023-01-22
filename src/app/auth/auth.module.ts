import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {AuthService} from './service/auth.service';
import {AuthInterceptor} from './helper/AuthInterceptor';
import {SignUpComponent} from './component/register/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoPermissionComponent} from './component/no-permission/no-permission.component';
import {SharedModule} from '../shared-module/shared-module';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    NoPermissionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthInterceptor,
    AuthService
  ]
})
export class AuthModule {
}
