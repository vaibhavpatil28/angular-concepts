import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CommunicatorService{
    value:number;
    sendData: (status)=>number;
  getData(status:boolean){
      let serviceRef=this;
    const observable = new Observable<number>(function subscribe(subscriber) {
        let intervalId = setInterval(()=>{
            if (serviceRef.sendData) {   
                subscriber.next(serviceRef.sendData(status));
                subscriber.complete();
                clearInterval(intervalId);
            }
        },10);
      });
      return observable;
  }
  storeData(){
    this.value = this.sendData(status);
  }
}