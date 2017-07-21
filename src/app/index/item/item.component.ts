import {Component, DoCheck, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IndexServiceService} from "../service/index-service.service";
import {IndexModel} from "../model/index-model";
import {APP_CONFIG} from "../../config/app-config.constants";
import {IAppConfig} from "../../config/app-config.interface";
import {MdSnackBar, MdDialog} from "@angular/material";
import {AddScreenComponent} from "../modal/add-screen/add-screen.component";
import {SimpleConfirmModalComponent} from "../modal/simple-confirm-modal/simple-confirm-modal.component";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit,OnChanges,DoCheck{
  private imgUrl:string='';
  ngDoCheck(): void {
    // console.log(this);
    // console.log(event)
    // console.log();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  @Input('id') id:number;
  @Input('screenName') screenName:string;
  // @Input('imgUrl') imgUrl:string;
  @Output() copyOrEdit=new EventEmitter<any>();

  @Input('imgUrl')
  set imgurl(imgUrl:string){
    // console.log(imgUrl);
    this.imgUrl=this.app_config.SERVICE_BASE_URL+imgUrl;
  }

  constructor(private indexService:IndexServiceService,
            @Inject(APP_CONFIG) private app_config:IAppConfig,
              public dialog: MdDialog,
              public snackBar: MdSnackBar) { }

  openSnackBar(message: string, action: string,additionConfigs:any) {
    // let config:IsimpleConfirmModalConfig;
    var config=Object.assign({},additionConfigs,{duration:2000});
    this.snackBar.open(message, action, config);
  }

  ngOnInit() {
  }


  collect(){
    console.log("看看那");
    // this.onCollect1.emit();
  }

  editScreen(fun:string){
    // this.myModal.open();
    // console.log(this.id);
    //四种状态 copy、preivew、add、delete
    console.log(fun);
    if(fun=='copy'){
      let dialogRef=this.dialog.open(SimpleConfirmModalComponent,{
        width:'400px',
        data:{
          title:'复制大屏至我的案例集',
          content:'是否复制大屏至我的案例集？',
        },
      });
      dialogRef.afterClosed().subscribe((x)=>{
        if(x=='cancel'){
          this.openSnackBar('取消复制大屏！','',{
            extraClasses:['snackBarCancel']
          });
        }
        else if(x=='confirm'){
          this.openSnackBar('已复制大屏至我的案例集！','',{
            extraClasses:['snackBarConfirm']
          });
        }
      })
    }
    else if(fun=='preview'){
      console.log("preview");
        window.location.href='http://mmcode.top';
    }
    else if(fun=='add'){

    }
    else if(fun=='delete'){
      let dialogRef=this.dialog.open(SimpleConfirmModalComponent,{
        width:'400px',
        data:{
          title:'删除该大屏',
          content:'是否删除该大屏？',
        },
      });
      dialogRef.afterClosed().subscribe((x)=>{
        if(x=='cancel'){
          this.openSnackBar('取消删除大屏！','',{
            extraClasses:['snackBarCancel']
          });
        }
        else if(x=='confirm'){
          this.openSnackBar('成功删除大屏！','',{
            extraClasses:['snackBarConfirm']
          });
        }
      })
    }

  }




}
interface IsimpleConfirmModalConfig{
  [key:string]:any;
}

