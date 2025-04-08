import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tecappsys-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  standalone:true,
  imports:[
    CommonModule,
    MatIconModule
  ]
})
export class ToolbarTitleComponent {
  @Output() public backView: EventEmitter<void> = new EventEmitter();
  @Input() public entity:string;
  @Input() public title:string;
  @Input() public showBackView:boolean;

  public contructor(){}

  public onBackView(){
    this.backView.emit();
  }
}