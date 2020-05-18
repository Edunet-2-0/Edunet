import { Injectable } from '@angular/core';
import { 
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../../services/auth/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    public authService: JwtService,
    public router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn) {
      // if(this.router.url !== '/') {
      //   console.log(this.router.url)
      //   window.alert('Access not allowed ! You need to be an admin');
      // }
      this.router.navigate(['login']);
    }
      return true;
  }
  
}
