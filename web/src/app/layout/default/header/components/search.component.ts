import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'header-search',
  template: `
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'arrow-down' : 'search'">
      <input
        nz-input
        [(ngModel)]="q"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [placeholder]="'搜索：员工、文件、照片等'"
      />
    </nz-input-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent implements AfterViewInit {
  q: string;

  qIpt: HTMLInputElement;

  @HostBinding('class.alain-default__search-focus')
  focus = false;

  @HostBinding('class.alain-default__search-toggled')
  searchToggled = false;

  constructor(private el: ElementRef) {
  }

  @Input()
  set toggleChange(value: boolean) {
    if (typeof value === 'undefined') {
      return;
    }
    this.searchToggled = true;
    this.focus = true;
    setTimeout(() => this.qIpt.focus(), 300);
  }

  ngAfterViewInit() {
    this.qIpt = (this.el.nativeElement as HTMLElement).querySelector('.ant-input') as HTMLInputElement;
  }

  qFocus() {
    this.focus = true;
  }

  qBlur() {
    this.focus = false;
    this.searchToggled = false;
  }
}
