/*
============================================
; Title: Assignment 7.2 Reactive Forms
; Author: Professor Krasso
; Date: February 15, 2022
; Modified By: William Talley
; Description: GPA Calculator App pt 3 sign-in.guard file
;===========================================
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      const sessionUser = this.cookieService.get('session_user');

      if (sessionUser) {
        console.log('true')
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        console.log('false')
        return false;
      }
  }

}
