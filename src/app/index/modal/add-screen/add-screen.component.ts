import {
  Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators,FormControlName} from "@angular/forms";
import {MdInputModule} from '@angular/material';
import {HttpTokenInterceptor} from "../../../interceptor/http-token-interceptor";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css'],
  // encapsulation: ViewEncapsulation.Native

})
export class AddScreenComponent implements OnInit{
  // ngDoCheck(): void {
  //   console.log('changes');
  //   console.log(this.from);
  // }
  screenNameValue:string;
  screenDescriptionValue:string;


  // @ViewChild('screenNameValue') screenNameValue: ElementRef;
  // @ViewChild('screenDescriptionValue') screenDescriptionValue: ElementRef;
  @ViewChild('form') from;

  screenNameRepeat=false;

  formGroup = new FormGroup({
    screenName: new FormControl('', [
      Validators.required,
      Validators.pattern(/\d*/)],
    ),

    screenDescription: new FormControl('', [
      Validators.required,]),
  });

  constructor(public dialogRef: MdDialogRef<AddScreenComponent>,
              private http: HttpTokenInterceptor) {
  }

  ngOnInit() {
  }

  newScreen() {
    // console.log(this.screenNameValue);
    // console.log(this.screenNameValue.nativeElement.value);

    this.http.post('/ajax/home/my/find?screenName='+this.screenNameValue+'&description='+this.screenDescriptionValue,{
    }).subscribe((x) => {
      // console.log(this.screenNameValue);
      // console.log('看看大屏名称是否重复'+x);
        if (x == true) {
          // 新建大屏成功
          this.dialogRef.close('success');

        }
        else {
          //  名称重复什么的
          // this.screenNameValue.nativeElement.hasError
          // this.screenNameVali.emit(false);
          this.screenNameRepeat=true;
        }
      })
      console.log(this.from.form.valid)

  }







}
