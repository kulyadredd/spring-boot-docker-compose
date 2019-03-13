import {UsersComponent} from "./components";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AdminAppRoutingModule} from "./admin-app-routing.module";
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule, MatTableModule
} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        AdminAppRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        MatGridListModule,
        MatTableModule
    ],
    declarations: [
        UsersComponent,
    ]
})
export class AdminAppModule { }