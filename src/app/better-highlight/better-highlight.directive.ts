import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // enable external setting of directive properies
  @Input() defaultBackgroundColor: string = 'red';
  // @Input() highlightBackgroundColor: string = 'blue';

  // using directive name as an alias
  @Input('appBetterHighlight') highlightBackgroundColor: string = 'blue';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mousemove') onMouseEnter(eventData: Event) {
    this.backgroundColor = this.highlightBackgroundColor;
  }

  @HostListener('mouseout') onMouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultBackgroundColor;
  }
}
