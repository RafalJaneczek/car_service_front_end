import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {SignUpRequest} from '../model/sign-up-request';
import {LoginRequest} from '../model/login-request';
import {JwtResponse} from '../model/JwtResponse';
import {API_URL} from '../../global-variables';
import {NgxPermissionsService} from 'ngx-permissions';

const AUTH_API = API_URL + '/auth/user/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private permissionsService: NgxPermissionsService) {
  }

  public login(loginRequest: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(AUTH_API + 'login', {
      username: loginRequest.username,
      password: loginRequest.password
    }, httpOptions).pipe(map((response: JwtResponse) => {
      return response as JwtResponse;
    }));
  }

  public signup(signUpRequest: SignUpRequest): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: signUpRequest.username,
      email: signUpRequest.email,
      password: signUpRequest.password
    }, httpOptions);
  }

  public loadUserPermissions(userPermissions: string[]): void {
    console.log(userPermissions);
    this.permissionsService.addPermission(userPermissions);
  }

}
