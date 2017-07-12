import {Inject, Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {IAppConfig} from "../config/app-config.interface";
import {APP_CONFIG} from "../config/app-config.constants";
import {NgProgressService} from "ngx-progressbar";

@Injectable()
export class HttpTokenInterceptor {

  constructor(private http: Http, @Inject( APP_CONFIG ) private app_Config:IAppConfig,private progressbar:NgProgressService) {}

  createAuthorizationHeader(headers: Headers) {
    // headers.append('token','maomao');
    this.progressbar.start();
    headers.append('Content-Type','application/json');
    headers.append('token',localStorage.getItem('token'));
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    url=this.app_Config.SERVICE_BASE_URL+url;
    console.log(url);
    return this.http.get(url, {
      headers: headers
    }).map((res) => {
      let result = res.json();
      // console.log(result);
      this.progressbar.done();
      return result;
    }).catch(this.handleError)
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    url=this.app_Config.SERVICE_BASE_URL+url;
    return this.http.post(url, data, {
      headers: headers
    }).map(res=>{
      this.progressbar.done();
     return  res.json()
    });
  }

  handleError(error:any){
    let errorMsg=(error.message)?error.message:error.status? `$(error.status)-$(error.statusText)`:'Server Error';
    console.log(errorMsg);
    return Observable.throw(errorMsg);
  }
}
