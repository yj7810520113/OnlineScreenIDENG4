import {Component, Inject, OnInit} from '@angular/core';
import {HttpTokenInterceptor} from "../../interceptor/http-token-interceptor";
import {APP_CONFIG} from "../../config/app-config.constants";
import {IAppConfig} from "../../config/app-config.interface";


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.app_Config);
  }

  title = '哈哈哈哈';
  // http:HttpClient;
  constructor (public http:HttpTokenInterceptor,
               @Inject( APP_CONFIG ) public app_Config:IAppConfig){
    // this.http=http;
  }
  getsomthing(){
    this.http.get('http://www.mmcode.top:8080/airzj/ajax/tianchi/aqibyday').subscribe(result=>{
      console.log(result);
      // console.log(result.json());
    })
    this.http.get('http://www.baidu.com').subscribe(result=>{
      console.log(result);
      // console.log(result.json());
    },error=>{
      console.log(error);
    })
  }
}
