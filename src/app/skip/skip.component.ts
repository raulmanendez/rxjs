import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, skip, skipLast, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit {

  intervalObs$=interval(500);
  constructor() { }

  ngOnInit(): void {
    this.skipOperator()
    this.skipLastOperator()
    this.skipUntilOpearator()
    this.skipWhileOperator()
  }

  skipArr1=new Array();
  skipOperator() {
    this.intervalObs$.pipe(take(10),skip(4)).subscribe(data => this.skipArr1.push(data))
  }

  skipLastArr1=new Array();
  skipLastOperator() {
    this.intervalObs$.pipe(take(10),skipLast(4)).subscribe(data => this.skipLastArr1.push(data))
  }

  skipUntillArr=new Array()
  skipUntilOpearator() {
    let closeObs$=fromEvent(document.getElementById('skip-until-start-timer')!,'click')

    this.intervalObs$.pipe(
        skipUntil(closeObs$),
        take(5))
      .subscribe(data => this.skipUntillArr.push(data))
  }

  skipWhileArr=new Array()
  skipWhileOperator() {
    this.intervalObs$.pipe(
      take(10),
        skipWhile((x) => x < 5))
      .subscribe(data => this.skipWhileArr.push(data))
  }


}
