import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {
  // this is structural directive, that works oposite to ngIf - adds element if condition returns 'false'
  @Input() set appUnless(condition: boolean) {
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

}
