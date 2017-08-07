import {Inject, Injectable} from '@angular/core';
import {HttpTokenInterceptor} from "../../interceptor/http-token-interceptor";
import {APP_CONFIG} from "../../config/app-config.constants";
import {IAppConfig} from "../../config/app-config.interface";

@Injectable()
export class IndexServiceService {

  constructor(private http:HttpTokenInterceptor,@Inject( APP_CONFIG ) private app_Config:IAppConfig) { }

  getScreenConfig(url:string){
    console.log("我执行了");
    return this.http.get(url).map((x)=>{
      // console.log(x);
      // x['imgUrl']=this.app_Config.SERVICE_BASE_URL+x['imgUrl'];
      return x;
    });
  }
  deleteScreenConfig(url:string){
    console.log("我执行了111");
    console.log(url);
    return this.http.get(url).map((x)=>{
      console.log(x);
      // x['imgUrl']=this.app_Config.SERVICE_BASE_URL+x['imgUrl'];
      return x;
    });  }
}
