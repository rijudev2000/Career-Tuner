import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService implements CanActivate {
  constructor(private User: UserService, private router: Router) {}
  isAuthenticated: any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated != true) {
      return this.User.Auth()
        .toPromise()
        .then((res) => {
          if (res.success == true) {
            this.isAuthenticated = true;
            this.User.isAuthenticated.next(true);
            return this.isAuthenticated;
          }
          if (res.success == false) {
            this.User.isAuthenticated.next(false);
            this.isAuthenticated = false;
            return this.router.parseUrl('/user/signin');
          }
        });
    } else {
      this.isAuthenticated = false;
      return this.isAuthenticated;
    }
  }
}
