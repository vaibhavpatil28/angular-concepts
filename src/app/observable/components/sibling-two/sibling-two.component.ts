import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector: 'sibling-two',
  template: `
  <h4>Sibling Two</h4>
  <div>
    <input type="text" placeholder="Full Name" (input)="collectInputValue($event)"/>
  </div>
  `,
  styles: [`
  `]
})
export class SiblingTwoComponent {
  constructor(private communicatorService: CommunicatorService) {
   this.communicatorService.sendData = this.sendData;
  }

  sendData(status) {
    if (status) {
      return Math.floor((Math.random() * 100) + 1);
    }
  }
  collectInputValue(event){
    this.communicatorService.getInputValuePromise = this.communicatorService.iGiveYouAPromise(event.srcElement.value);
  }
}
