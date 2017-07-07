import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMyBeautifulBackground]'
})
export class MyBeautifulBackgroundDirective {

  private e1:HTMLElement;
  @Input('appMyBeautifulBackground') myBackgroundColor;

  constructor(e1:ElementRef) {
    this.e1=e1.nativeElement;
    this.e1.style.backgroundColor=this.myBackgroundColor;
  }

  @HostListener('click')
  onClick(){
    console.log('hostListener我点击了');
    this.e1.style.backgroundColor='red';
  }

}
