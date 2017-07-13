import {Component, DoCheck, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IndexServiceService} from "../service/index-service.service";
import {IndexModel} from "../model/index-model";
import {APP_CONFIG} from "../../config/app-config.constants";
import {IAppConfig} from "../../config/app-config.interface";

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
            @Inject(APP_CONFIG) private app_config:IAppConfig) { }

  ngOnInit() {
  }


  collect(){
    console.log("看看那");
    // this.onCollect1.emit();
  }

  copyScreen(){
    this.copyOrEdit.emit('copy');
  }
  previewScreen(){
    this.copyOrEdit.emit('edit');
  }



}
