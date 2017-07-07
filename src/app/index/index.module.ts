import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyVisualScreenComponent} from './my-visual-screen/my-visual-screen.component'
import {RouterModule} from "@angular/router";
import {indexRoutes} from "./index.routes";
import { AllVisualScreenComponent } from './all-visual-screen/all-visual-screen.component';
import { ItemComponent } from './item/item.component';
import {FormsModule} from "@angular/forms";
import { MyBeautifulBackgroundDirective } from './my-beautiful-background.directive';
import { MyNgIfDirective } from './my-ng-if.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(indexRoutes),
    FormsModule  //导入FormModule
  ],
  declarations: [
    MyVisualScreenComponent,
    AllVisualScreenComponent,
    ItemComponent,
    MyBeautifulBackgroundDirective,
    MyNgIfDirective
  ]
})
export class IndexModule { }
