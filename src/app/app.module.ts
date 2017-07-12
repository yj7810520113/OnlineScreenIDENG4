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
import {MdProgressBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_CONFIG, APP_DI_CONFIG} from "./config/app-config.constants";
import { LoginComponent } from './user/login/login.component';
import {LoginServiceService} from "./user/login/login-service.service";
import {HeaderNavComponent} from "./index/header-nav/header-nav.component";
import {MyVisualScreenComponent} from "./index/my-visual-screen/my-visual-screen.component";
// import { NgProgressModule } from 'ng2-progressbar';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HeaderNavComponent,
    // MyVisualScreenComponent
  ],
  imports: [
    //导入browserModule同时会同时导入applicationModule和commonModule，所以只需要导入browserModule就行了
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

    BrowserAnimationsModule,
    MdProgressBarModule,
    NgProgressModule



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

