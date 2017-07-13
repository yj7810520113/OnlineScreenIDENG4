import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ConnectionBackend, Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import { AppComponent } from './app.component';
import {HttpTokenInterceptor} from "./interceptor/http-token-interceptor";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";

import { NgProgressModule,NgProgressService} from 'ngx-progressbar';



//material-design
import {
  MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
  MdCoreModule, MdDatepickerModule, MdDialogModule,
  MdProgressBarModule, MdExpansionModule, MdGridListModule, MdIconModule, MdMenuModule,
  MdListModule, MdInputModule, MdNativeDateModule, MdPaginatorModule, MdProgressSpinnerModule, MdRadioModule,
  MdRippleModule, MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule, MdSortModule,
  MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_CONFIG, APP_DI_CONFIG} from "./config/app-config.constants";
import { LoginComponent } from './user/login/login.component';
import {LoginServiceService} from "./user/login/login-service.service";
import {HeaderNavComponent} from "./index/header-nav/header-nav.component";
import {MyVisualScreenComponent} from "./index/my-visual-screen/my-visual-screen.component";
import {AllVisualScreenComponent} from "./index/all-visual-screen/all-visual-screen.component";
import {ItemComponent} from "./index/item/item.component";
import {MyBeautifulBackgroundDirective} from "./index/my-beautiful-background.directive";
import {MyNgIfDirective} from "./index/my-ng-if.directive";
import {ModalModule} from "ngx-modal";
// import { NgProgressModule } from 'ng2-progressbar';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderNavComponent,
    // MyVisualScreenComponent,
    // AllVisualScreenComponent,
    // ItemComponent,
    // MyBeautifulBackgroundDirective,
    // MyNgIfDirective,
  ],
  imports: [
    //导入browserModule同时会同时导入applicationModule和commonModule，所以只需要导入browserModule就行了
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

    BrowserAnimationsModule,
    MdProgressBarModule,
    NgProgressModule,
    ModalModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,



  ],
  providers: [
    HttpTokenInterceptor,
    LoginServiceService,
    {
      provide:APP_CONFIG,
      useValue: APP_DI_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

