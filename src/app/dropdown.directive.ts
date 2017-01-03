import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened() {
    return this.isOpened;
  }
  @HostListener('click') open() {
    this.isOpened = !this.isOpened;
  }
  @HostListener('mouseleave') close() {
    this.isOpened = false;
  }
  private isOpened: boolean = false;
}
