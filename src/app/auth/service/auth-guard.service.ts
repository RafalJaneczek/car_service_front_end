import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {NgxPermissionsService} from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  hasPermissions: boolean;

  constructor(private userSessionService: UserService,
              private permissionsService: NgxPermissionsService,
              private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedIn() && this.ifUserHasPermission(route);
  }

  private ifUserHasPermission(route: ActivatedRouteSnapshot): boolean {
    this.permissionsService.hasPermission(route.data['role']).then(result => {
      this.hasPermissions = result;
    });

    if (!this.hasPermissions) {
      console.log(this.hasPermissions);
      this.router.navigate(['/no-permission'])
      return false
    } else {
      return true
    }
  }

  private isUserLoggedIn(): boolean {
    if (!this.userSessionService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

}
