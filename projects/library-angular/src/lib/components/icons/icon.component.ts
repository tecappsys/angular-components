import { Component, Input } from '@angular/core';

@Component({
  selector: 'tecappsys-icon',
  standalone: true,
  template: `
    <svg
      class="icon"
      [attr.width]="width"
      [attr.height]="height || width"
    >
      <use [attr.xlink:href]="'../../assets/svg/icons.svg#'+name"></use>
    </svg>
  `,
})
export class IconComponent {
  @Input() public name!: string;
  @Input() public width: number = 24;
  @Input() public height?: number;
}