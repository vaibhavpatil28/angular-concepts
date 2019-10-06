import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObservableRoutingModule } from './observable-routing.module';

import{SiblingTwoComponent} from './components/sibling-two/sibling-two.component';
import { SiblingOneComponent } from './components/sibling-one/sibling-one.component';
import { ObservablePage } from './pages/observable.page';
import { GroupByPage } from './pages/group-by.page';

@NgModule({
  imports:[
    CommonModule,
    ObservableRoutingModule
  ],
  declarations:[
    SiblingOneComponent,
    SiblingTwoComponent,
    ObservablePage,
    GroupByPage
    ],
  providers:[]
})
export class ObservableModule{}