import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components";

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {path: '**', redirectTo: 'users'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminAppRoutingModule {
}