import { Injectable } from '@angular/core';
import { Observable, asyncScheduler } from 'rxjs';
import { observeOn, publish } from 'rxjs/operators';

@Injectable()
export class CommunicatorService {
    value: number;
    getInputValuePromise: Promise<string>;
    emitData$
    _sendData: (status) => number;
    
    public set sendData(v: (status) => number ) {
        this._sendData = v;
        this.emitData$.connect()
    }
    
    getData(status: boolean) {
        let serviceRef = this;
        const observable = new Observable<number>(function subscribe(subscriber) {
            // let intervalId = setInterval(() => {
                if (serviceRef._sendData) {
                    subscriber.next(serviceRef._sendData(status));
                    subscriber.complete();
                    // clearInterval(intervalId);
                }
            // }, 10);
        }).pipe(publish());
        this.emitData$ = observable;
        return observable;
    }
    storeData() {
        this.value = this.sendData(status);
    }
    getDataByStartObservable(status) {
        return Observable
    }

    iGiveYouAPromise(value: string) {
        return new Promise<string>(function (resolve, reject) {
            if (value === '') {
                reject('Name not entered')
            } else {
                setTimeout(function () {
                    resolve(value);
                }, 1500);
            }
        });
    }
    getFullNameWithHelpOfPromise() {
        return new Observable<string>((subscriber) => {
            try {
                this.getInputValuePromise.then((resolveVal) => {
                    subscriber.next(resolveVal);
                    subscriber.complete();
                }, (rejectVal) => {
                    subscriber.error(rejectVal);
                })
                return;
            } catch (error) {
                console.log('In error block of observable!!!!!!!!!!!!');
                subscriber.error(error);
            }
        });
    }
}