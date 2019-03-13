import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent, LoginComponent, RegistrationComponent} from "./components";
import {ContentComponent} from "./components/content/content.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AuthGuard} from "../../../../common/core/guards";

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
              path: '',
            component: LandingComponent,
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            }
        ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}