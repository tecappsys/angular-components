import { CommonModule } from '@angular/common';
import {Component, Input, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DomseguroPipe } from '../../pipes';

@Component({  
  standalone:true,
  selector: 'tecappsys-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],  
  imports:[
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    DomseguroPipe
  ]
})

export class GenericTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() public tableDataSource:any;
  @Input() public columns: string[] = []; 
  public _displayedColumns:any={};

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  public constructor() {}

  @Input() set displayedColumns(dc:string[] | any) {
    let keys: string[]=[];
    if(Array.isArray(dc)){
      keys = dc;
      keys.forEach((c:string)=>{this._displayedColumns[c]={}});
    }else if(dc && !Array.isArray(dc)){
      keys = Object.keys(dc);
      this._displayedColumns = dc;
    }
    this.columns = keys;
  }

  public get displayedColumns():string[] | any{
    return this._displayedColumns
  }

  public getLabel(row:any,col:string,displayColumns:any){
    let res : any = undefined;
    if(displayColumns[col]){
      if(displayColumns[col].display){
        res = displayColumns[col].display(row);
      } else{
        res = row[col]
      }
    }
    return res;
  }

  public isImage(col:string,displayColumns:any){
    return (displayColumns[col] && displayColumns[col].image);
  }

  public isLabel(col:string,displayColumns:any){
    return (displayColumns[col] && !displayColumns[col].image && !displayColumns[col].iframe);
  }

  public isIFrame(col:string,displayColumns:any){
    return (displayColumns[col] && displayColumns[col].iframe);
  }
}
