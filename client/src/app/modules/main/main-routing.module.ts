import {MainComponent} from "./components";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminGuard, AuthGuard} from "../../common/core/guards";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'admin',
                loadChildren: './modules/admin/admin-app.module#AdminAppModule',
                canActivate: [AuthGuard],
                canLoad: [AdminGuard]
            },
            {
                path: '',
                loadChildren: './modules/app/app.module#AppModule'
            },
            {path: '**', redirectTo: ''}
        ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}