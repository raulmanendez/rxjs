import { Component, OnInit } from '@angular/core';
import { Observable, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, fromEvent, interval, tap } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  buffer = new Array();
  countArr = new Array();
  intervalObs$ = interval(1000);
  collectBuffer$!: Observable<Event>;
  constructor() { }

  ngOnInit(): void {

    this.collectBuffer$=fromEvent(document.getElementById('button-collect')!,'click');

    this.bufferCount();
    this.bufferCount1();
    this.bufferCount2();
    this.bufferCount3();
    this.bufferCount4();
  }

  startBuffer() {
    this.intervalObs$
    .pipe(
      tap(data => this.countArr.push(data)),
      buffer(this.collectBuffer$)
    )
    .subscribe(data => {
      this.buffer=[...data];
    })
  }

  bufferCountArr1 = new Array();
  bufferCount() {
    this.intervalObs$.pipe(bufferCount(5)).subscribe(data => {
      this.bufferCountArr1=data;
    })
  }

  bufferCountArr2 = new Array();
  bufferCount1() {
    this.intervalObs$.pipe(bufferCount(5,3)).subscribe(data => {
      this.bufferCountArr2=data;
    })
  }

  bufferCountArr3 = new Array();
  bufferCount2() {
    this.intervalObs$.pipe(bufferTime(3000)).subscribe(data => {
      this.bufferCountArr3=data;
    })
  }

  bufferCountArr4 = new Array();
  bufferCount3() {
    const openObs$=interval(5000)
    const closeObs$= (data:number) => interval(1000)

    this.intervalObs$.pipe(bufferToggle(openObs$,closeObs$)).subscribe(data => {
      this.bufferCountArr4=data;
    })
  }

  bufferCountArr5 = new Array();
  bufferCount4() {
    let x=0;
    this.intervalObs$.pipe(
      tap(i => x=i),
      bufferWhen(
      () => {
         if(x > 3) {
          return interval(5000)
         } else {
          return interval(1000)
         }
      }
    )).subscribe(data => {
      this.bufferCountArr5=data;
    })
  }

}
