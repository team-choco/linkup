import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinkComponent} from "./link/link.component";
import {LinkCollectionComponent} from "./link-collection/link-collection.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: "links", component: LinkComponent
  },
  {
    path:"link-collections", component:LinkCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
