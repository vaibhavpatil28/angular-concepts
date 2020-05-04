import { Component, OnInit } from '@angular/core';
// import { TemplateSyntaxRoutingModule } from '../../template-syntax-routing.module';

@Component({
  selector: 'app-template-syntax-menu',
  templateUrl: './template-syntax-menu.component.html',
  styleUrls: ['./template-syntax-menu.component.scss']
})
export class TemplateSyntaxMenuComponent implements OnInit {

  // routes = TemplateSyntaxRoutingModule.getRoutes()[0].children;
  constructor() { }

  ngOnInit() {
  }

}
