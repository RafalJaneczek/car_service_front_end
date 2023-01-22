import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserSessionService} from './user-session.service';
import {NgxPermissionsService} from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userSessionService: UserSessionService,
              private permissionsService: NgxPermissionsService,
              private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedIn() && this.ifUserHasPermission(route);
  }

  private ifUserHasPermission(route: ActivatedRouteSnapshot): boolean {
    let hasPermissions: boolean = false;
    this.permissionsService.hasPermission(route.data['role']).then(result => {
      hasPermissions = result;
    });

    if (!hasPermissions) {
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
