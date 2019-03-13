import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../../common/core/models";
import {UserService} from "../../../../../../common/core/services";

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }

}
