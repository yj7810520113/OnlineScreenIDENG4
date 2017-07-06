import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ConnectionBackend, Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import { AppComponent } from './app.component';
import {HttpTokenInterceptor} from "./interceptor/http-token-interceptor";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //导入browserModule同时会同时导入applicationModule和commonModule，所以只需要导入browserModule就行了
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    HttpTokenInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

