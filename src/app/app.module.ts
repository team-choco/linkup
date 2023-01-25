import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { HttpClientModule } from "@angular/common/http";
import {MemberDetailComponent} from "./member/member-detail/member-detail.component";
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberDetailComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
