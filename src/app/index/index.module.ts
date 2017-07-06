import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyVisualScreenComponent} from './my-visual-screen/my-visual-screen.component'
import {RouterModule} from "@angular/router";
import {indexRoutes} from "./index.routes";
import { AllVisualScreenComponent } from './all-visual-screen/all-visual-screen.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(indexRoutes)
  ],
  declarations: [
    MyVisualScreenComponent,
    AllVisualScreenComponent,
    ItemComponent
  ]
})
export class IndexModule { }
