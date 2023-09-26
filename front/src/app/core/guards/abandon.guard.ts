import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../services/toolServices/userData.service';

@Injectable({
  providedIn: 'root'
})
export class AbandonGuard implements CanDeactivate<unknown> {

  constructor(
    private userData: UserDataService
  ) { }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("you pass for here")
    if (this.userData.checkForm) {
      const response = confirm("Estas seguro que quieres salir?");
      return response;
    } else {
      return true;
    }
  }

}
