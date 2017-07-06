import { Component } from '@angular/core';
import {HttpTokenInterceptor} from './interceptor/http-token-interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '哈哈哈哈';
  // http:HttpClient;
  constructor (public http:HttpTokenInterceptor){
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
