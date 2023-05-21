import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, take, takeLast, takeUntil, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  
  intervalObs$=interval(500);
  constructor() { }

  ngOnInit(): void {
    this.takeOperator()
    this.takeLastOperator()
    this.takeWhileOperator()
  }

  takeArr1=new Array();
  takeOperator() {
    this.intervalObs$.pipe(take(10)).subscribe(data => this.takeArr1.push(data))
  }

  takeLastArr1=new Array();
  takeLastOperator() {
    this.intervalObs$.pipe(take(10),takeLast(4)).subscribe(data => this.takeLastArr1.push(data))
  }

  takeUntillArr=new Array()
  takeUntil() {
    let closeObs$=fromEvent(document.getElementById('take-until-stop-timer')!,'click')

    this.intervalObs$.pipe(
        takeUntil(closeObs$))
      .subscribe(data => this.takeUntillArr.push(data))
  }

  takeWhileArr=new Array()
  takeWhileOperator() {
    this.intervalObs$.pipe(
        takeWhile((x) => x < 5))
      .subscribe(data => this.takeWhileArr.push(data))
  }

}
