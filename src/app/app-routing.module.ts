import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LinkCollectionComponent} from "./link-collection/link-collection.component";
import {LinkComponent} from "./link/link.component";
import {LinkCollectionDetailComponent} from "./link-collection/link-collection-detail/link-collection-detail.component";
import {DefaultLayoutComponent} from "./layout/default/default-layout.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/link'
  },
  {
    path: "link",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: LinkCollectionComponent
      },
      {
        path: ":id",
        component: LinkCollectionDetailComponent
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
