import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { HttpClientModule } from "@angular/common/http";
import {MemberDetailComponent} from "./member/member-detail/member-detail.component";
import { LinkComponent } from './link/link.component';
import { LinkCollectionComponent } from './link-collection/link-collection.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition, IconModule} from '@ant-design/icons-angular';
import {NzPopoverModule} from "ng-zorro-antd/popover";

import { MenuFoldOutline, MenuUnfoldOutline, PlusSquareOutline, ShareAltOutline, EllipsisOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ MenuFoldOutline, MenuUnfoldOutline, PlusSquareOutline, ShareAltOutline, EllipsisOutline ];
// <span nz-icon nzType="plus-square" nzTheme="outline"></span>

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberDetailComponent,
    LinkComponent,
    LinkCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzFormModule,
    NzPopoverModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
