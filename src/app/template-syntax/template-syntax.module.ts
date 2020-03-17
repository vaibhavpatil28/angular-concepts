import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateSyntaxRoutingModule } from './template-syntax-routing.module';
import { TemplateSyntaxMenuComponent } from './page/template-syntax-menu/template-syntax-menu.component';
import { UiModule } from '../ui/ui.module';
import { ExpressionsComponent } from './component/expressions/expressions.component';
import { AccessPublicMemberDirective } from './directive/access-public-member.directive';


@NgModule({
  declarations: [TemplateSyntaxMenuComponent, ExpressionsComponent, AccessPublicMemberDirective],
  imports: [
    CommonModule,
    TemplateSyntaxRoutingModule,
    UiModule
  ]
})
export class TemplateSyntaxModule { }
