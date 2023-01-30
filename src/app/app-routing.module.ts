import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinkCollectionComponent} from "./link-collection/link-collection.component";
import {LinkComponent} from "./link/link.component";
import {LinkCollectionDetailComponent} from "./link-collection/link-collection-detail/link-collection-detail.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path:"link-collection",
    component:LinkCollectionComponent,
    children:[
      {path:":id", component:LinkCollectionDetailComponent}
    ]
  },
  { path: 'links', component: LinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
