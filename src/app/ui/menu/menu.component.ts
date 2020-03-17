import { Component, OnInit, Input } from '@angular/core';

export class Menu {
  name:string;
  path:string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu[];
  constructor() { }

  ngOnInit() {
  }

}
