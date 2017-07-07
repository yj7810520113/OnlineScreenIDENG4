import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-all-visual-screen',
  templateUrl: './all-visual-screen.component.html',
  styleUrls: ['./all-visual-screen.component.css'],
  // queries:{
  //   input:new ViewChild('testSelect')
  // }
})
export class AllVisualScreenComponent implements OnInit {
  @ViewChild('testSelect') testSelect:ElementRef;

  public  datas=[

    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://192.168.1.14:8180/hescharts_server/img/98-1499151055356.png'
    },
    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://192.168.1.14:8180/hescharts_server/img/98-1499151055356.png'
    },
    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://192.168.1.14:8180/hescharts_server/img/98-1499151055356.png'
    },
    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://192.168.1.14:8180/hescharts_server/img/98-1499151055356.png'
    }
  ]


  constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }

  collect(event:any){
    console.log(event);
    // console.log('---------------');
    console.log(this.testSelect);

    //如果用了ngmodel双向绑定话，则不能用value赋值
    this.renderer.setProperty(this.testSelect.nativeElement,'value','testProperty');

  }

}


//有问题
// //表单验证
// const NUMBER_REGEXP=new RegExp(/\d*/);
// const SPACE_REGEXP=new RegExp(/\s*/);
// export  function validateTestSelect(c:FormControl){
//   return (NUMBER_REGEXP.test(c.value)||SPACE_REGEXP.test(c.value))?null:{testSelect:{valid:false,errorMsg:'必须为数字或者是空格'}};
// }
