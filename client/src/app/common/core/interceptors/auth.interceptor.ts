import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../services";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let auth = this.authService.currentUserValue;
        if (auth && auth.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            });
        }
        return next.handle(request);
    }
}
