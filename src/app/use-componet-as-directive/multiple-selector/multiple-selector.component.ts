import { Component, OnInit } from '@angular/core';

/* we can use any valid CSS selector as selector for component and directive */
@Component({
  selector: `
              app-multiple-selector, 
              [dir-mult], 
              .mult-dir-class
            `,
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.scss']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('MultipleSelectorComponent Works');
  }

}
