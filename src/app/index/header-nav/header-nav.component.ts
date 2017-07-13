import {Component, Inject, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {HttpTokenInterceptor} from "../../interceptor/http-token-interceptor";
import {APP_CONFIG} from "../../config/app-config.constants";
import {IAppConfig} from "../../config/app-config.interface";
import {MdDialog} from "@angular/material";
import {AddScreenComponent} from "../modal/add-screen/add-screen.component";


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class HeaderNavComponent implements OnInit{

  private headerText='我的案例集';
  ngOnInit(): void {
    console.log(this.app_Config);
    // let dialogRef = this.dialog.open(AddScreenComponent,{
    //   height: '400px',
    //   width: '600px',
    //   position:'center',
    // });
  }

  title = '哈哈哈哈';
  // http:HttpClient;
  constructor (public http:HttpTokenInterceptor,
               @Inject( APP_CONFIG ) public app_Config:IAppConfig,
               // public dialog: MdDialog
  ){
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
  showMyText(){
    console.log('我的案例集');
    this.headerText='我的案例集';
  }
  showShareText(){
    this.headerText='推荐案例集';
  }
}
