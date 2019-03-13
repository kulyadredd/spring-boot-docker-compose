import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auth, Credential, Registration, User} from "../../models";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private currentUserSubject: BehaviorSubject<Auth>;
    public currentUser: Observable<Auth>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Auth {
        return this.currentUserSubject.value;
    }


    signup(user: Registration) {
        return this.http.post('api/auth/signup', user);
    }

    signin(credentials: Credential) {
        return this.http.post<Auth>('api/auth/signin', credentials)
            .pipe(map(auth => {
                if (auth && auth.accessToken) {
                    localStorage.setItem('currentUser', JSON.stringify(auth));
                    this.currentUserSubject.next(auth);
                }
                return auth;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
