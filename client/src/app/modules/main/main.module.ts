import {NgModule} from "@angular/core";
import {FooterComponent, HeaderComponent, MainComponent} from "./components";
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MainRoutingModule,
        FlexLayoutModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        HeaderComponent,
        MainComponent,
        FooterComponent
    ]
})
export class MainModule {
}