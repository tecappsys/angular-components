import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { IconComponent } from '../icons/icon.component';

@Component({
  standalone: true,
  selector: 'tecappsys-spinner',
  templateUrl: './spinner.component.html',
  imports:[
    CommonModule,
    IconComponent
  ]
})
export class SpinnerComponent {
  public show:boolean;
  public showAnimation:boolean;
  constructor( private spinnerService: SpinnerService ) { 
    this.spinnerService.show$.subscribe((show)=>{
      if(show){
        this.show=show;
        this.showAnimation=show;
      }else{
        this.showAnimation=show;
        setTimeout(() => {
          this.show=show;
        }, 800);        
      }
      
    })
  }
}
