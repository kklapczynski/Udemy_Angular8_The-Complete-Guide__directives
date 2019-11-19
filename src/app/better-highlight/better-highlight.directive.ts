import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  // better - more universal (for Service Workers e.g) approach is to not set style of a DOM element directly (as in basic-highlight), but using Renderer2
  // constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // add interactivity: chnage background-color when hovering over element, that has directive as an attribute
  @HostListener('mousemove') onMouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseout') onMouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
