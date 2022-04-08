import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'welcome-page',
    component: WelcomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutes { }
