import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconComponent } from '../icons/icon.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
@Component({
  standalone: true,
  selector: 'tecappsys-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports:[
    IconComponent,
    MatExpansionModule,
    MatIconModule
  ]
})

export class SidebarComponent  {
  @Input() isDarkTheme:boolean;
  @Input() menu:any;

  public APP_ANGULAR_SPA:string = '';
  public APP_ANGULAR_SPOTIFY:string= '';

  public panelOpenState = new BehaviorSubject<boolean>(false);
  public constructor(){}
}