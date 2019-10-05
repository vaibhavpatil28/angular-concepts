import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector:'sibling-one',
  template:`
  {{status}}
        <h6 style="margin-bottom: 0">VALUES:</h6>
      <div *ngFor="let value of values">* {{ value }}</div>

  `,
  styles:[`
  `]
})
export class SiblingOneComponent{
  private data: Observable<Array<number>>;
  private values = [];
  status

  constructor(private communicatorService: CommunicatorService) {
    // this.init();
    this.communicatorService.getData(true).subscribe(res=>{
      this.values.push(res)
    });
    this.communicatorService.getData(true).subscribe(res=>{
      this.values.push(res)
    })
  }

  init() {
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next([42]);
          }, 1000);

          setTimeout(() => {
              observer.next([43]);
          }, 2000);

          setTimeout(() => {
              observer.complete();
          }, 3000);

          this.status = "Started";
      });

      let subscription = this.data.forEach(v => this.values.push(v))
            .then(() => this.status = "Ended");
  }


}
