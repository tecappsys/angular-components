import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'tecappsys-navbar',
  templateUrl: './navbar.component.html',
  standalone:true,
  imports:[
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class NavbarComponent {
  @Output() public changeIsDarkTheme: EventEmitter<boolean> = new EventEmitter();
  @Input() public isDarkTheme:boolean = false;
  @Input() public navigateTo:string = '';

  public constructor(){}

  public onChangeTheme(){
    this.isDarkTheme = !this.isDarkTheme
    this.changeIsDarkTheme.emit( this.isDarkTheme )
  }

  public navigateToHome(){
    setTimeout(() => {
      window.location.href = this.navigateTo
    }, 100);
  }

}
