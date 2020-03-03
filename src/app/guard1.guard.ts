import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {

  constructor(private auth:AuthService, private route:Router){
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let logIn = this.auth.isLoggedIn();
      if(logIn){
        return true
      }
      else{
        this.route.navigate(['/login']);
        return false;
      }  
  }
  
}
