import { Directive } from '@angular/core';

@Directive({
  selector: '[AccessPublicMember]',
  exportAs:'AccessPublicMember'
})
export class AccessPublicMemberDirective {

  public username= 'vaibhav';
  constructor() { }
  ngOnInit(){
    console.log('ngOnInit == AccessPublicMemberDirective');
    
  }

}
