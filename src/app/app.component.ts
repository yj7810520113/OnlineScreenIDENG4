import {Component, Inject, OnInit} from '@angular/core';
import {HttpTokenInterceptor} from './interceptor/http-token-interceptor';
import {IAppConfig} from "./config/app-config.interface";
import {APP_CONFIG} from "./config/app-config.constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.app_Config);
    this.router.navigate(['/login']);
  }

  title = '哈哈哈哈';
  // http:HttpClient;
  constructor (public http:HttpTokenInterceptor,
               @Inject( APP_CONFIG ) public app_Config:IAppConfig,
  public router:Router){
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
