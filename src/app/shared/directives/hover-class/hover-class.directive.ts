import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[hover-class]'
})
export class HoverClassDirective {
  @Input('hover-class') hoverClass: any;

  constructor(public elementRef: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.update('add');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.update('remove');
  }

  protected update(action: string): void {
    this.hoverClass.split(' ').forEach((item: any) => this.elementRef.nativeElement.classList[action](item));
  }
}
