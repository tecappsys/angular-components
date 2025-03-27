import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { ToolbarSearchComponent } from './components/toolbar-search/toolbar-search.component';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { RouteUrlService } from '../../services/route-url.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'tecappsys-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports:[
    CommonModule,
    ToolbarSearchComponent,
    ToolbarTitleComponent
  ]
})
export class ToolbarComponent {

  @Output() public search: EventEmitter<string> = new EventEmitter();
  @Output() public backView: EventEmitter<string> = new EventEmitter();
  @Input() public isSearch:boolean = false; 

  public entity:string;
  public title:string;
  public showBackView:boolean;  
  public urlBackView:string;
  private snapshot: ActivatedRouteSnapshot;

  constructor( private router:Router, private routeUrlService: RouteUrlService ) { 
    this.router.events.subscribe( (event) =>{
      if(event instanceof ActivationEnd){
        this.snapshot = event.snapshot;
        this.initData(this.snapshot)
      }
    })

    this.routeUrlService.title$.subscribe((title)=>{
      this.title=title;
    })
  }

  public initData(snapshot:ActivatedRouteSnapshot){
    const data = snapshot.data;
    const entity = data['entity'];
    const title = data['title'];
    if(entity || title){
      this.entity = entity;
      this.title = this.getTitle(title);
      this.urlBackView = this.getUrlBack(snapshot);
      this.showBackView = this.urlBackView ? true : false;
    }
  }

  private getUrlBack(snapshot:ActivatedRouteSnapshot):string{
    return snapshot.data['urlBack'];
  }

  private getTitle(entity:string){
    let title = entity
    const params: string[] = Object.keys(this.snapshot.params);
    if(params.length > 0){
      params.forEach((key)=>{        
        title = this.snapshot.params[key]
      })
    }
    return title  
  }
  
  public onBackView(){
    this.backView.emit(this.urlBackView)
  }

  public onSearch(search:string){
    this.search.emit(search)  
  }
}
