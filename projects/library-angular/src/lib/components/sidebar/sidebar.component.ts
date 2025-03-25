import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconComponent } from '../icons/icon.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Level } from '../../interfaces';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'tecappsys-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports:[
    CommonModule,
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

  public levels:Level[]=[
    {
      active:true,
      perfilUsuario:'public',
      text:'apps',
      path:'https://portfolio.tecappsys.com/',
      children:[
        {
          id:1,
          leaf:true,
          active:true,
          iconCustom:'angular',
          text:'Angular',
          children:[
            {
              id:11,
              leaf:true,
              active:true,
              text:'SPA',
              path:'https://portfolio.angular.tecappsys.com/spa'
            },
            {
              id:12,
              leaf:true,
              active:true,
              text:'Spotify',              
              path:'https://portfolio.angular.tecappsys.com/spotify'
            }             
          ]
        },
        {
          id:2,
          leaf:true,
          active:true,
          iconCustom:'react',
          text:'React',
          path:'https://portfolio.react.tecappsys.com/'
        }
      ]
    }
  ]

  public panelOpenState: { [key: number]: boolean } = {};
  
  public constructor(){}

  public onPanelOpen(id: number,path?:string): void {
    if(!path){
      this.panelOpenState[id] = true;
    }else{
      setTimeout(() => {      
        window.location.href = path
      }, 100);
    }
  }
  
  public onPanelClose(id: number): void {
    this.panelOpenState[id] = false;
  }
}
