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

  async Auth() {
    await this.User.Auth().subscribe((res) => {
      
      if (res.success == true) {
        this.isAuthenticated = true;
        return true;
      }
      if (res.success == false) {
        return false;
      }
      return false;
    });
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.isAuthenticated != true){
      return this.User.Auth()
      .toPromise()
      .then((res) => {
        if (res.success == true) {
          this.isAuthenticated = true;
          return this.isAuthenticated;
        }
        if (res.success == false) {
          this.isAuthenticated = false;
          return this.router.parseUrl('/user/signin');
        }
      });
    }else{
      this.isAuthenticated = false;
      return this.isAuthenticated;
    }
    
  }
}
