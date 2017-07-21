import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-simple-confirm-modal',
  templateUrl: './simple-confirm-modal.component.html',
  styleUrls: ['./simple-confirm-modal.component.css']
})
export class SimpleConfirmModalComponent implements OnInit {
  private modalTitle='';
  private modalContent='';

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
      this.modalTitle=this.data['title'];
     this.modalContent=this.data['content'];
  }

}
