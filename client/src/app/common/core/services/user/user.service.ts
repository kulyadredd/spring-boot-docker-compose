import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>('api/user/me');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }
}
