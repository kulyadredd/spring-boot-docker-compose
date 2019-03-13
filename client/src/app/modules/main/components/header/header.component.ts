import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../common/core/services";
import {Router} from "@angular/router";
import {AuthUtil} from "../../../../common/core/helpers/auth-util";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isAdmin(): boolean{
    return AuthUtil.isAdmin(this.authService.currentUserValue);
  }

  isLoggedIn(): boolean {
    return this.authService.currentUserValue != null;
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/']);
  }
}