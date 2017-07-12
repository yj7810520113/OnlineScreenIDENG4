import { Injectable } from '@angular/core';
import {HttpTokenInterceptor} from "../../interceptor/http-token-interceptor";
import {User} from "../model/user";

@Injectable()
export class LoginServiceService {

  constructor(private http:HttpTokenInterceptor) { }

  dologin(user:User):any{
    // return this.http.post('/admin/login',{userName:user.userName,passWord:user.passWord})
    //   .map((x)=>{
    //     console.log(x);
    //     if(x.success==true) {
    //       localStorage.setItem('token', x['token']);
    //     }
    //     return x=x;
    //   });
    return this.http.get('/admin/login?userName='+user.userName+'&passWord='+user.passWord)
      .map((x)=>{
        console.log(x);
        if(x.success==true) {
          localStorage.setItem('token', x['token']);
        }
        return x=x;
      });
  }
}
