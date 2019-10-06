import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{ObservablePage} from './pages/observable.page';
import { GroupByPage } from './pages/group-by.page';

const routes: Routes=[
  {path:'', component:ObservablePage},
  {path:'groupby',component: GroupByPage}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ObservableRoutingModule{}