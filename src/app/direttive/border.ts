import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class Border implements OnChanges {
  @Input() appBorder: string = '';
  @Input() defaultBorder: string = '';

  constructor(private el: ElementRef) {}
  @HostListener('click') onClick() {
    // this.el.nativeElement.style.border = '1px solid yellow';
    console.log(this.el.nativeElement.style.border);
    if (!this.el.nativeElement.style.border) {
      this.el.nativeElement.style.border = this.defaultBorder;
    } else {
      this.el.nativeElement.style.border = '';
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appBorder']) {
      this.el.nativeElement.style.border = this.appBorder || this.defaultBorder;
    }
  }
}
