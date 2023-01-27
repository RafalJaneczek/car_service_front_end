import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {SignUpRequest} from '../model/sign-up-request';
import {LoginRequest} from '../model/login-request';
import {JwtResponse} from '../model/JwtResponse';
import {API_URL} from '../../global-variables';
import {NgxPermissionsService} from 'ngx-permissions';
import {BaseResponse} from '../../shared-module/model/base-response';
import {ErrorInfo} from "../../shared-module/model/ErrorInfo";

const AUTH_API = API_URL + '/auth/user/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private permissionsService: NgxPermissionsService) {
  }

  public login(loginRequest: LoginRequest): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(AUTH_API + 'login', {
      username: loginRequest.username,
      password: loginRequest.password
    }, httpOptions).pipe(map((response: BaseResponse<JwtResponse | ErrorInfo>) => {
      return response;
    }));
  }

  public signup(signUpRequest: SignUpRequest): Observable<BaseResponse<any>> {
    return this.http.post<BaseResponse<any>>(AUTH_API + 'signup', {
      username: signUpRequest.username,
      email: signUpRequest.email,
      password: signUpRequest.password
    }, httpOptions).pipe(map((response: BaseResponse<any>) => {
      return response;
    }));
  }

  public loadUserPermissions(userPermissions: string[]): void {
    this.permissionsService.addPermission(userPermissions);
  }

}
