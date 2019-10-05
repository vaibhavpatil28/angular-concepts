import{Component} from '@angular/core';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector:'observable-page',
  template:`
  <sibling-one></sibling-one>
  <sibling-two></sibling-two>
  `,
  styles:[],
  providers:[CommunicatorService]
})
export class ObservablePage{}