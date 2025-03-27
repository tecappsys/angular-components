import { Component, Input } from '@angular/core';
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
  public currentUrl: string;
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
  
  constructor() {
    this.currentUrl = window.location.href;
    this.initializePanelStateFromUrl();
  }

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

  public isItemSelected(path?: string): boolean {
    if (!path) return false;
    return this.currentUrl === path || this.currentUrl.startsWith(path);
  }

  private initializePanelStateFromUrl(): void {
    this.levels.forEach(level => {
      if (level.active && level.children?.length) {
        level.children.forEach(child => {
          if (!child.active) return;
  
          // Si la URL coincide con el path del hijo (nivel medio)
          if (child.path && this.isItemSelected(child.path)) {
            this.panelOpenState[child.id] = true;
          }
  
          // Si hay hijos internos (nivel más profundo)
          child.children?.forEach(grandChild => {
            if (grandChild.path && this.isItemSelected(grandChild.path)) {
              this.panelOpenState[child.id] = true;
            }
          });
        });
      }
    });
  }
}
