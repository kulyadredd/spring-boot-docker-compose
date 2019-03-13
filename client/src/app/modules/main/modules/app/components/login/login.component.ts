import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../../common/core/services";
import {Credential} from "../../../../../../common/core/models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential = new Credential();

  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.signin(this.credential).subscribe(
        data => {
          this.router.navigate(['/profile']);
        });
  }
}
