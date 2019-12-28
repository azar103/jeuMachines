import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import 'rxjs/Rx';

import {Observable, Subscription} from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubsciption: Subscription;
  constructor() {}
  ngOnInit() {
      const counter = Observable.interval(1000);
      this.counterSubsciption = counter.subscribe(
        (value) => {
          this.secondes = value;
        },
        (error: any) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete !');
        }
      );
  }

  ngOnDestroy() {
    this.counterSubsciption.unsubscribe();
  }

}
