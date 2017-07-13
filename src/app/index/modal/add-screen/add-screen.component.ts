import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {FormControl, Validators} from "@angular/forms";
import {MdInputModule} from '@angular/material';



@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css'],
  // encapsulation: ViewEncapsulation.Native

})
export class AddScreenComponent implements OnInit {

  screenName = new FormControl('', [
    Validators.required,
    Validators.pattern(/\d*/)]);

  screenDescription=new FormControl('',[
    Validators.required,
  ])

  constructor(public dialogRef: MdDialogRef<AddScreenComponent>) { }

  ngOnInit() {
  }

}
