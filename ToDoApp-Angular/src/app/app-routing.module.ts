import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewsModule } from "./features/views/views.module";

const routes: Routes = [
  {
    path: '',
    children: [
      {
      path: '',
      loadChildren: () => import('./features/views/views.module').then(m => m.ViewsModule)
      },
      {
        path: 'views',
        loadChildren: () => import('./features/views/views.module').then(m => m.ViewsModule)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
