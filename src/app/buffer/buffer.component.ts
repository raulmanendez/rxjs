import { Component, OnInit } from '@angular/core';
import { Observable, buffer, fromEvent, interval, tap } from 'rxjs';

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

  collectBuffer() {
    
  }

}
