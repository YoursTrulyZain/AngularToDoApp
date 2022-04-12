import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { AngularMaterialModule } from "../shared/main-outlet/angular-material/angular-material.module";
import { ViewsRoutes } from "./views.routing";
import { WelcomeComponent } from "./welcome/welcome.component";


@NgModule({
  imports: [
    ViewsRoutes,
    AngularMaterialModule
    // MatSliderModule
  ],

  declarations: [
    WelcomeComponent
  ],

  providers: [

  ]
})

export class ViewsModule { }
