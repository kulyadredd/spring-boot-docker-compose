import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {AuthService, UserService} from './services';
import { AuthInterceptor } from './interceptors';
import {AdminGuard, AuthGuard} from "./guards";
import {AuthUtil} from "./helpers/auth-util";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        AdminGuard,
        AuthGuard,
        AuthUtil,
        UserService
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}