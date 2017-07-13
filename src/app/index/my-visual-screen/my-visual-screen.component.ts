import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NgProgressService} from "ngx-progressbar";
import {IndexServiceService} from "../service/index-service.service";

@Component({
  selector: 'app-my-visual-screen',
  templateUrl: './my-visual-screen.component.html',
  styleUrls: ['./my-visual-screen.component.css']
})
export class MyVisualScreenComponent implements OnInit {

  private datas:any;

  ngOnDestroy(): void {
    this.NgProgressService.done();
    // throw new Error('Method not implemented.');
  }


  @ViewChild('testSelect') testSelect:ElementRef;


  constructor(private renderer:Renderer2,
              private NgProgressService:NgProgressService,
              private indexService:IndexServiceService,
  ) { }

  ngOnInit() {
    this.indexService.getScreenConfig('/ajax/home/my').subscribe((x)=>{
      this.datas=x;
      // console.log('我初始化了');
      // console.log(this.datas)
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
    console.log(id+event);
  }


}
