import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

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
  @Output() menuFocus = new Subject();
  // @Output() menuFocus = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onMenuFocus(event){
    this.menuFocus.next('this is @Output() event created by Rxjs Subject');
    // this.menuFocus.emit('Menu is focued');
  }

}
