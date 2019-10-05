import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'hero', loadChildren:()=>import('./heroes/heroes.module').then(m=>m.HeroesModule)},
  {path:'observable', loadChildren:()=> import('./observable/observable.module').then(m=> m.ObservableModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
