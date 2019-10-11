import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { NestedFormsPageComponent } from './page/nested-forms-page/nested-forms-page.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NestedFormsPageComponent, BasicInfoComponent, AddressInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
