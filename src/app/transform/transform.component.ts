import { Component, OnInit } from '@angular/core';
import { concat, concatAll, groupBy, interval, map, mapTo, mergeAll, mergeMap, of, pairwise, take, toArray, window, windowCount, windowTime, windowToggle, windowWhen } from 'rxjs';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.windowWhenOperator()
    this.windowToggleOperator()
    this.windowTimeOperator()
    this.windowCountOperator()
    this.windowOperator()

    this.pairwiseOperator()
    this.groupByOperator()

    this.mapOperator()
    this.mapToOperator()
  }

  windowWhenArray=new Array()
  windowWhenOperator() {
    interval(500).pipe(
      take(15),
      windowWhen(() => interval(2000)),
      mergeMap(val =>  val.pipe(toArray()))
    ).subscribe(data=>{
      this.windowWhenArray.push(data)
    })
  }

  windowToggleArray=new Array()
  windowToggleOperator() {
    interval(500).pipe(
      take(15),
      windowToggle(interval(500), () => interval(1000)),
      mergeMap(val =>  val.pipe(toArray()))
    ).subscribe(data=>{
      this.windowToggleArray.push(data)
    })
  }

   windowTimeArray=new Array()
  windowTimeOperator() {
    interval(500).pipe(
      take(15),
      windowTime(500,1000),
      mergeMap(val =>  val)
    ).subscribe(data=>{
      this.windowTimeArray.push(data)
    })
  }

  windowCountArray=new Array()
  windowCountOperator() {
    interval(500).pipe(
      take(15),
      windowCount(3,1),
      mergeMap(val =>  val.pipe(toArray()))
    ).subscribe(data=>{
      this.windowCountArray.push(data)
    })
  }

  windowArray=new Array()
  windowOperator() {
    interval(500).pipe(
      take(10),
      window(interval(1000)),
      mergeMap(val =>  val.pipe(toArray()))
    ).subscribe(data=>{
      this.windowArray.push(data)
    })
  }

  pairwiseArray=new Array()
  pairwiseOperator() {
    of(1,2,3,4,5,6,7,8,9).pipe(
      pairwise()
    ).subscribe(data=>{
      this.pairwiseArray.push(data)
    })
  }

  groupByArray=new Array()
  groupByOperator() {
    of(2,1,3,4,7,9,6,8).pipe(
      groupBy(number => number % 2==0),
      mergeMap(val =>  val.pipe(toArray()))
    ).subscribe(data=>{
      this.groupByArray.push(data)
    })
  }

  mapArray=new Array()
  mapOperator() {
    of(1,2,3,4).pipe(map(x => x *10)).subscribe(data=>{
      this.mapArray.push(data)
    })
  }

  mapToArray=new Array()
  mapToOperator() {
    of(1,2,3,4).pipe(mapTo(10)).subscribe(data=>{
      this.mapToArray.push(data)
    })
  }

}
