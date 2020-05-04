import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-selector, [dir-mult]',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.scss']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('MultipleSelectorComponent Works');
  }

}
