import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'tecappsys-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  standalone:true,
  imports:[
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,    
    MatIconModule,
    MatInputModule
  ]
})
export class ToolbarSearchComponent implements OnInit {
  @Output() public search: EventEmitter<string> = new EventEmitter();
  public searchForm: UntypedFormGroup;
  
  public constructor( private fb: UntypedFormBuilder){}

  public ngOnInit(){
    this.createForms()
  }

  private createForms(){
    this.searchForm = this.fb.group({
      search:['']
    })
  }

  public onSearch(){
    const text = this.searchForm.get('search')?.value;
    if(text && text !== ''){
      this.search.emit(text);      
      this.searchForm.setValue({search:''})     
    }    
  }

}
