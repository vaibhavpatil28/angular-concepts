import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'hero', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'observable', loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule) },
  { path: 'reactiveForms', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
  { path: 'templateSyntax', loadChildren: () => import('./template-syntax/template-syntax.module').then(m => m.TemplateSyntaxModule) },
  { path: 'circularDependency', loadChildren: () => import('./circular-dependency/circular-dependency.module').then(m => m.CircularDependencyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static getRoutes() {
    return routes;
  }
}
