import {Component, DoCheck, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IndexServiceService} from "../service/index-service.service";
import {IndexModel} from "../model/index-model";
import {APP_CONFIG} from "../../config/app-config.constants";
import {IAppConfig} from "../../config/app-config.interface";
import {MdSnackBar, MdDialog} from "@angular/material";
import {AddScreenComponent} from "../modal/add-screen/add-screen.component";

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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
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
    if(fun=='copy'){

    }
    else if(fun=='preview'){
      console.log("preview");
        window.location.href='http://mmcode.top';
    }
    else if(fun=='add'){
      let dialogRef = this.dialog.open(AddScreenComponent,{
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((x)=>{
        if(x=='success'){
          this.openSnackBar('大屏添加成功！','');
        }
        else{
          this.openSnackBar('取消创建大屏！','');
        }
      })
    }
    else if(fun=='delete'){

    }

  }




}
