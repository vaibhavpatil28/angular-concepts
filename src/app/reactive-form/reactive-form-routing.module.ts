import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedFormsPageComponent } from './page/nested-forms-page/nested-forms-page.component';


const routes: Routes = [
  { path: 'ControlValueAccessor', component: NestedFormsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
