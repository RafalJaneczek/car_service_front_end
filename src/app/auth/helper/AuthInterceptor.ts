import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSessionService} from '../service/user-session.service';
import {TOKEN_HEADER_KEY} from '../../global-variables';
import {SessionObject} from '../model/SessionObject';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userSessionService: UserSessionService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.userSessionService.geSessionObject(SessionObject.TOKEN_KEY);
    if (token != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
    }
    return next.handle(authReq);
  }

}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
