import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircularDependencyComponent } from './circular-dependency.component';



const routes: Routes = [
  {
    path:'',component:CircularDependencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircularDependencyRoutingModule {
  /**
   * getRoutes
   */
  public static getRoutes() {
    return routes;
  }
 }
