import { EventEmitter, Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEY, THEME_UI } from '../enums';

@Injectable({providedIn: 'root'})
export class ThemeService {

  private currentTheme: THEME_UI;
  public themeChanged: EventEmitter<THEME_UI> = new EventEmitter<THEME_UI>();

  public constructor() {
    this.loadTheme();
  }

  loadTheme() {
    this.currentTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI) as THEME_UI || THEME_UI.LIGHT ;
    document.body.classList.add(this.currentTheme);
  }

  toggleTheme(newTheme:THEME_UI) {        
    document.body.classList.remove(this.currentTheme);
    document.body.classList.add(newTheme);
    this.currentTheme = newTheme;
    window.localStorage.setItem(LOCAL_STORAGE_KEY.THEME_UI, newTheme); 
    this.themeChanged.emit(newTheme);
  }
}
