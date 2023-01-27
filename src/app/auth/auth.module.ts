import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {AuthService} from './service/auth.service';
import {AuthInterceptor} from './helper/AuthInterceptor';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoPermissionComponent} from './component/no-permission/no-permission.component';
import {SharedModule} from '../shared-module/shared-module';
import {RouterModule} from '@angular/router';
import {AlertModule} from 'ngx-bootstrap/alert';


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
    SharedModule,
    RouterModule,
    AlertModule
  ],
  providers: [
    AuthInterceptor,
    AuthService
  ]
})
export class AuthModule {
}
