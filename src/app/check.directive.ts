import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective {
  constructor(private templateRFef:TemplateRef<any>,private viewRef:ViewContainerRef) { }
  @Input() set appCheck(condition:boolean){
    if(condition){
      this.viewRef.createEmbeddedView(this.templateRFef)
    }else{
      this.viewRef.clear();
    }
  }

}
