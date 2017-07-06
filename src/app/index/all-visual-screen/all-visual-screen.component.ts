import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-visual-screen',
  templateUrl: './all-visual-screen.component.html',
  styleUrls: ['./all-visual-screen.component.css']
})
export class AllVisualScreenComponent implements OnInit {

  public  datas=[

    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://mmcode.top:8080/hescharts_server/img/98-1499044956057.png'
    },
    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://mmcode.top:8080/hescharts_server/img/98-1499044956057.png'
    },
    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://mmcode.top:8080/hescharts_server/img/98-1499044956057.png'
    },
    {
      title:'爽肤水',
      description:'爽肤水描述',
      imgUrl:'http://mmcode.top:8080/hescharts_server/img/98-1499044956057.png'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

  collect(event:any){
    console.log(event);
  }

}
