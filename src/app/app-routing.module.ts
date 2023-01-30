import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LinkCollectionComponent} from "./link-collection/link-collection.component";
import {LinkComponent} from "./link/link.component";
import {DefaultLayoutComponent} from "./layout/default/default-layout.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/link-collections'
  },
  {
    path: "link-collections",
    component: DefaultLayoutComponent,
    children: [
      // {
      //   path: "",
      //   component: LinkCollectionComponent
      // },
      {
        path: ":linkCollectionId",
        component: LinkCollectionComponent
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
