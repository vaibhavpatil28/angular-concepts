import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Concepts';
  constructor() {
  }
  
}
