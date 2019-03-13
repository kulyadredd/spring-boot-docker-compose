import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';
import {AuthService} from "../../services";
import {AuthUtil} from "../../helpers/auth-util";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private router: Router, private authService: AuthService) {
  }

  canLoad() {
    const currentUser = this.authService.currentUserValue;
    if(currentUser && AuthUtil.isAdmin(currentUser)){
      return true
    }
    this.router.navigate(['/']);
    return false;
  }

}
