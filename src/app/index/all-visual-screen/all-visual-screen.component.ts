import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MdDialog, MdProgressBarModule, MdSnackBar} from '@angular/material';
import { NgProgressService} from 'ngx-progressbar'
import {IndexServiceService} from "../service/index-service.service";
import {IndexModel} from "../model/index-model";
import {AddScreenComponent} from "../modal/add-screen/add-screen.component";
import {ModalModule} from "ngx-modal";









@Component({
  selector: 'app-all-visual-screen',
  templateUrl: './all-visual-screen.component.html',
  styleUrls: ['./all-visual-screen.component.css'],
  // queries:{
  //   input:new ViewChild('testSelect')
  // }
})
export class AllVisualScreenComponent implements OnInit,OnDestroy{
  @ViewChild('myModal') myModal:any;
  private datas:any;
  private addScreenModal=AddScreenComponent;

  ngOnDestroy(): void {
    this.NgProgressService.done();
    // throw new Error('Method not implemented.');
  }


  @ViewChild('testSelect') testSelect:ElementRef;


  constructor(private renderer:Renderer2,
              private NgProgressService:NgProgressService,
              private indexService:IndexServiceService,
              public dialog: MdDialog,
              public snackBar: MdSnackBar
  ) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.indexService.getScreenConfig('/ajax/home/all/share').subscribe((x)=>{
      this.datas=x;
    })
  }

  collect(event:any){
    console.log(event);
    // console.log('---------------');
    console.log(this.testSelect);

    //如果用了ngmodel双向绑定话，则不能用value赋值
    this.renderer.setProperty(this.testSelect.nativeElement,'value','testProperty');

  }
  showModal(id:number,event:any){
    // // this.myModal.open();
    // console.log(id+event);
    // let dialogRef = this.dialog.open(AddScreenComponent,{
    //   width: '600px',
    // });
    // dialogRef.afterClosed().subscribe((x)=>{
    //   if(x=='success'){
    //     this.openSnackBar('大屏添加成功！','');
    //   }
    //   else{
    //     this.openSnackBar('取消创建大屏！','');
    //   }
    // })

  }

}


//有问题
// //表单验证
// const NUMBER_REGEXP=new RegExp(/\d*/);
// const SPACE_REGEXP=new RegExp(/\s*/);
// export  function validateTestSelect(c:FormControl){
//   return (NUMBER_REGEXP.test(c.value)||SPACE_REGEXP.test(c.value))?null:{testSelect:{valid:false,errorMsg:'必须为数字或者是空格'}};
// }
