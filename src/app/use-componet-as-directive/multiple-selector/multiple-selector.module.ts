import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleSelectorComponent } from './multiple-selector.component';



@NgModule({
  declarations: [MultipleSelectorComponent],
  imports: [
    CommonModule
  ],
  exports:[MultipleSelectorComponent]
})
export class CompAsDirectiveModule { }
