import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberComponent} from "./member/member.component";
import {MemberDetailComponent} from "./member/member-detail/member-detail.component";


const routes: Routes = [
  {
    path: "members",
    component:MemberComponent,
    children:[
      {path:":id", component:MemberDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
