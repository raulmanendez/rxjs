import { Component, OnInit } from '@angular/core';
import { Observable, connectable, interval, share, take } from 'rxjs';

@Component({
  selector: 'app-hot-cold-obs',
  templateUrl: './hot-cold-obs.component.html',
  styleUrls: ['./hot-cold-obs.component.css']
})
export class HotColdObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.coldObs()
    this.hotObs()

    this.convertColdToHot()
    this.shareOperator()
  }

  //emitting values inside- different values for all observers
  coldObsData=new Array()
  coldObs() {

    let colsObs=new Observable((observer)=>{
      observer.next(Math.random())
    })


    colsObs.subscribe(data => {
      this.coldObsData.push("cold obs value 1:"+data)
    })

    colsObs.subscribe(data => {
      this.coldObsData.push("cold obs value 2:"+data)
    })
  }

  //emitting values outside - same value for all observers
  number=10
  hotObsData=new Array()
  hotObs() {

    let hotObs=new Observable((observer)=>{
      observer.next(this.number)
    })


    hotObs.subscribe(data => {
      this.hotObsData.push("hot obs value 1:"+data)
    })

    hotObs.subscribe(data => {
      this.hotObsData.push("hot obs value 2:"+data)
    })
  }

  conversionArray=new Array()
  convertColdToHot() {
    let source = connectable(interval(1000));

    source.pipe(take(10)).subscribe(data => {
      this.conversionArray.push(data);
    })

    setTimeout(() => {
      source.pipe(take(10)).subscribe(data => {
        this.conversionArray.push(data);
      })
    }, 5000);
    

    source.connect()
  }

  shareArray=new Array()
  shareOperator() {
    let source = interval(1000).pipe(take(10),share());

    source.subscribe(data => {
      this.shareArray.push(data);
    })

    setTimeout(() => {
      source.subscribe(data => {
        this.shareArray.push(data);
      })
    }, 5000);
  
    //no need to connect now,
  }
}
