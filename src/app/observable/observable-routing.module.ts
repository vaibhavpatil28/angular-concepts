import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{ObservablePage} from './pages/observable.page';

const routes: Routes=[
  {path:'', component:ObservablePage}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ObservableRoutingModule{}