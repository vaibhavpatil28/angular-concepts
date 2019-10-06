import { Component } from '@angular/core';
import { from, Observable, interval, ConnectableObservable } from 'rxjs';
import { groupBy, mergeMap, toArray, take, publish, tap } from 'rxjs/operators';

@Component({
    selector: 'group-by',
    template: `
    <h2 *ngFor="let group of groupedItems;let i=index">
    Group {{i+1}} : {{group | json}}
    </h2>
    `
})
export class GroupByPage {
    groupedItems = [];
    constructor() {
        // this.init();
        this.publishObservable();
    }
    init() {
        const people = [
            { name: 'Sue', age: 25 },
            { name: 'Joe', age: 30 },
            { name: 'Frank', age: 25 },
            { name: 'Sarah', age: 35 }
        ];
        var source = from(people).pipe(
            groupBy(
                function (x) { return x.age; },
                (x) => x.name
            )
            //   mergeMap(group => group.pipe(toArray()))
        );

        var subscription = source.subscribe(
            (obs) => {
                // this.groupedItems.push(obs);
                obs.subscribe(res => {
                    console.log('res->', res);
                    this.groupedItems.push(res);
                })
            },
            (err) => {
                console.log('Error: ' + err);
            },
            () => {
                console.log('Completed');
            });
    }

    publishObservable() {
        //emit value every 1 second
        const source = interval(1000);
        const example:ConnectableObservable<number> = source.pipe(
            //side effects will be executed once
            tap(_ => console.log('Do Something!')),
            //do nothing until connect() is called
            take(2),
            publish()
        ) as ConnectableObservable<number>;

        /*
          source will not emit values until connect() is called
          output: (after 5s)
          "Do Something!"
          "Subscriber One: 0"
          "Subscriber Two: 0"
          "Do Something!"
          "Subscriber One: 1"
          "Subscriber Two: 1"
        */
        const subscribe = example.subscribe(val =>
            console.log(`Subscriber One: ${val}`)
        );
        const subscribeTwo = example.subscribe(val =>
            console.log(`Subscriber Two: ${val}`)
        );

        //call connect after 5 seconds, causing source to begin emitting items
        setTimeout(() => {
            example.connect();
        }, 5000);

    }
}