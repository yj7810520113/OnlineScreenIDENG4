import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

  @Input('appMyNgIf')
  set condition(newCondition:boolean){
    if(newCondition==true){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainerRef.clear();
    }
  }
}
