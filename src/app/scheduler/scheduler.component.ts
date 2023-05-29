import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, of, queueScheduler } from 'rxjs'

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  schedulerArray=new Array()
  ngOnInit(): void {

    this.schedulerArray.push("1")
    let queueS=of("Queue Scheduler",queueScheduler);
    this.schedulerArray.push("2")
    let asapS=of("ASAP Scheduler",asapScheduler);
    this.schedulerArray.push("3")
    let asyncS=of("Async Scheduler",asyncScheduler);
    this.schedulerArray.push("4")



    merge(queueS,asapS,asyncS).subscribe(data=>{

      this.schedulerArray.push(data)

    })
    this.schedulerArray.push("5")
  }

}
