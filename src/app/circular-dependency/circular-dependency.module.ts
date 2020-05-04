import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularDependencyComponent } from './circular-dependency.component';
import { CircularDependencyRoutingModule } from './circular-dependency-routing.module';
import { MultipleSelectorComponent } from '../use-componet-as-directive/multiple-selector/multiple-selector.component';



@NgModule({
  declarations: [CircularDependencyComponent, MultipleSelectorComponent],
  imports: [
    CommonModule,
    CircularDependencyRoutingModule
  ],
  providers: []
})
export class CircularDependencyModule { }
