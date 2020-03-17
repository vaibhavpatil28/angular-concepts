import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateSyntaxMenuComponent } from './page/template-syntax-menu/template-syntax-menu.component';
import { ExpressionsComponent } from './component/expressions/expressions.component';


const routes: Routes = [
  {
    path:'',component:TemplateSyntaxMenuComponent , children:[
      {path:'expressions',component:ExpressionsComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateSyntaxRoutingModule {
  /**
   * getRoutes
   */
  public static getRoutes() {
    return routes;
  }
 }
