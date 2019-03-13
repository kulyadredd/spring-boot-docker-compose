import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../../common/core/services";
import {User} from "../../../../../../common/core/models";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  profile: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getCurrentUser().subscribe(response => {
        this.profile = [response];
      });
  }

}
