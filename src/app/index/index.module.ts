import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyVisualScreenComponent} from './my-visual-screen/my-visual-screen.component'
import {RouterModule} from "@angular/router";
import {indexRoutes} from "./index.routes";
import { AllVisualScreenComponent } from './all-visual-screen/all-visual-screen.component';
import { ItemComponent } from './item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdDialogModule, MdButtonModule, MdInputModule, MdSnackBarModule} from '@angular/material';


import { MyBeautifulBackgroundDirective } from './my-beautiful-background.directive';
import { MyNgIfDirective } from './my-ng-if.directive';
import { HeaderNavComponent } from './header-nav/header-nav.component';

import { NgProgressModule,NgProgressService} from 'ngx-progressbar';
import {IndexServiceService} from "./service/index-service.service";
import { AddScreenComponent } from './modal/add-screen/add-screen.component';
import {ModalModule} from "ngx-modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SimpleConfirmModalComponent } from './modal/simple-confirm-modal/simple-confirm-modal.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(indexRoutes),
    ReactiveFormsModule,//使用formcontrol必须使用reactiveFOrmsModule
    FormsModule,  //导入FormModule
    NgProgressModule,
    MdDialogModule,
    MdButtonModule,
    ModalModule,
    MdInputModule,
    MdSnackBarModule,

  ],
  declarations: [
    MyVisualScreenComponent,
    AllVisualScreenComponent,
    ItemComponent,
    MyBeautifulBackgroundDirective,
    MyNgIfDirective,
    AddScreenComponent,
    SimpleConfirmModalComponent,
    SnackBarComponent,
    // HeaderNavComponent,
  ],
  providers:[
    IndexServiceService,
  ],
  entryComponents:[
    AddScreenComponent,
    SimpleConfirmModalComponent,
    SnackBarComponent,
  ],
  bootstrap: []

})
export class IndexModule { }
