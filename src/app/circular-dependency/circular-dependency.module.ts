import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularDependencyComponent } from './circular-dependency.component';
import { CircularDependencyRoutingModule } from './circular-dependency-routing.module';
import { CompAsDirectiveModule } from '../use-componet-as-directive/multiple-selector/multiple-selector.module';



@NgModule({
  declarations: [CircularDependencyComponent],
  imports: [
    CommonModule,
    CircularDependencyRoutingModule,
    CompAsDirectiveModule
  ],
  providers: []
})
export class CircularDependencyModule { }
