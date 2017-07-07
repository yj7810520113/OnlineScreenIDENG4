import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit,OnChanges,DoCheck{
  ngDoCheck(): void {
    // console.log(this);
    // console.log(event)
    // console.log();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  title:string="";
  description:string="";
  @Input() imgUrl:string="";
  @Output() onCollect1=new EventEmitter<any>();
  @Input() index:number;

  constructor() { }

  ngOnInit() {
    console.log(this.index);
  }

  @Input('description')
  set descriptionString(description:string){
    this.description=description;
  }
  @Input('title')
  set titleString(title:string){
    this.title=title;
  }
  collect(){
    console.log("看看那");
    this.onCollect1.emit();
  }



}
