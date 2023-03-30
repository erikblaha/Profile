import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input('appSmoothScroll') targetElement!: string;

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    const target = document.querySelector(this.targetElement);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
