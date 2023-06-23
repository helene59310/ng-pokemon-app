import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor : string = '#009688';
  private defaultHeight : number = 180;

  constructor(private el: ElementRef) {
    this.borderCard(this.initialColor);
    this.heightCard(this.defaultHeight);
  }

  @Input('appBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.borderCard(this.borderColor || this.defaultColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.borderCard(this.initialColor);
  }
  
  private borderCard(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }

  private heightCard(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
}
