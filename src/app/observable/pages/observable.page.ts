import { Component } from '@angular/core';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'observable-page',
  template: `
  <sibling-one></sibling-one>
  <sibling-two></sibling-two>
  <h3>Angular sanitize all data before binding to view</h3>
        {{htmlSnippet}}
  `,
  styles: [],
  providers: [CommunicatorService]
})
export class ObservablePage {

  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}