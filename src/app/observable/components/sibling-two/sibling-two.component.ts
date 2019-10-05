import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector: 'sibling-two',
  template: `
  <button>Send data From sibling</button>

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
}
