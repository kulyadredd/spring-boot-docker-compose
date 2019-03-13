import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../../common/core/services";
import {Router} from "@angular/router";
import {Registration} from "../../../../../../common/core/models";

@Component({
  selector: 'app-login',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration = new Registration();

  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.signup(this.registration).subscribe(response => {
      console.log(response);
    });
  }
}
