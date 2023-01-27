import {Injectable} from '@angular/core';
import {SessionObject} from '../model/session-object';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private permissionsService: NgxPermissionsService) {
  }

  public logOut() {
    window.sessionStorage.clear();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['cars']));
    this.permissionsService.flushPermissions();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(SessionObject.TOKEN_KEY);
    window.sessionStorage.setItem(SessionObject.TOKEN_KEY, token);
  }

  public geSessionObject(key: string): string {
    const sessionObj: any = sessionStorage.getItem(key);
    return !!sessionObj ? sessionObj : '';
  }

  public isUserLoggedIn(): boolean {
    return window.sessionStorage.length > 0;
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(SessionObject.USER_KEY);
    window.sessionStorage.setItem(SessionObject.USER_KEY, JSON.stringify(user));
  }

  public getUser(): string {
    return JSON.parse(this.geSessionObject(SessionObject.USER_KEY));
  }

}
