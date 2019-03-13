import {LandingComponent, LoginComponent, RegistrationComponent} from "./components";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ContentComponent} from './components/content/content.component';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule, MatTableModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
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
        LandingComponent,
        LoginComponent,
        RegistrationComponent,
        ContentComponent,
        ProfileComponent
    ],
    providers: []
})
export class AppModule {
}