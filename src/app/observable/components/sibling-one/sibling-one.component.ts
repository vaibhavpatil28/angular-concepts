import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector:'sibling-one',
  template:`
  {{status}}
        <h6 style="margin-bottom: 0">VALUES:</h6>
      <div *ngFor="let value of values">* {{ value }}</div>
      <button (click)="getFullName()">Get data From sibling-two</button>
      <div>
        <label for="show-fullname">User's full name:</label>
        <h5 id="show-fullname" style="display:inline">{{fullName}}</h5>
      </div>

  `,
  styles:[`
  `]
})
export class SiblingOneComponent{
  private data: Observable<Array<number>>;
  private values = [];
  status
  fullName:string;

  constructor(private communicatorService: CommunicatorService) {
    // this.init();
    this.communicatorService.getData(true).subscribe(res=>{
      console.log('res1',res);
      this.values.push(res)
    });
    this.communicatorService.getData(true).subscribe(res=>{
      console.log('res2',res);
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

  getFullName(){
    this.communicatorService.getFullNameWithHelpOfPromise().subscribe((res:string)=>{
      this.fullName = res;
    },err=>{
      console.log('error=>',err);
      
    })
  }
}
