import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {LoginServiceService} from "./login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user=new User();
  private error=false;
  constructor(private loginService:LoginServiceService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log('登陆');
   this.loginService.dologin(this.user)
     .subscribe((x)=>{
        if(x['success']==true){
          this.router.navigate(['/index']);
        }
        else{
          this.error=true;
        }
     })

  }
}
