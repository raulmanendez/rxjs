import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription, from, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent  implements OnInit,AfterViewInit {

  studentArray = [
    { id: 1, name: "Mukesh" },
    { id: 2, name: "Bhupesh" },
    { id: 3, name: "Sachin" },
    { id: 4, name: "Ashu" },
  ]

  promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('resolve of promise')
    },3000)
  })   

  studentObservable$ = from(this.studentArray);
  promiseObservable$ = from(this.promise);

  count=0;
  subscription=new Subscription();
  interval=interval(1000);
  intervals=new Array()
  
  ngOnInit(): void {
      
  }

  startInterval() {
    this.subscription=this.interval.subscribe((data) => this.intervals.push(data))
  }

  stopInterval(){
    this.subscription.unsubscribe();
  }

  constructor() {

    this.studentObservable$.subscribe({
      next: (data) => {
        console.log(data,"data in student observable...")
      },
      error: (error) => {
        console.log(error,"error in student observable...")
      },
      complete: () => {
        console.log("complete student observable...")
      }
    })

    this.promiseObservable$.subscribe({
      next: (data) => {
        console.log(data,"data in promise observable...")
      },
      error: (error) => {
        console.log(error,"error in promise observable...")
      },
      complete: () => {
        console.log("complete promise observable...")
      }
    })

  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('ob-button')!,'click').subscribe({
      next: (data) => {
        console.log(data,"data in event observable...")
      },
      error: (error) => {
        console.log(error,"error in event observable...")
      },
      complete: () => {
        console.log("complete event observable...")
      }
    })
  }

}
