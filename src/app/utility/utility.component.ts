import { Component, OnInit } from '@angular/core';
import { asyncScheduler, delay, dematerialize, from, map, materialize, observeOn, of, subscribeOn, toArray } from 'rxjs';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {

  source=of(1,2,3,4,5,6,7,8,9)
  constructor() { }


  ngOnInit(): void {
    this.delayUsage()
    this.materializeUsage()
    this.observeOnUsage()
    this.subscribeOnUsage()
    this.toArrayUsage()
  }

  delayArray=new Array()
  delayUsage() {
    this.source.pipe(delay(3000)).subscribe({
      next: (data) => {
        this.delayArray.push(data)
      }
    })
  }


  materializeArray=new Array()
  materializeUsage() {
    
    of(1,2,3).pipe(materialize()).subscribe({
      next: (data) => {
      this.materializeArray.push(data)
      },
      complete: () =>  {
       this.deMaterializeUsage()   
      }
    })
    
  }

  deMaterializeArray=new Array()
  deMaterializeUsage() {
    
    from(this.materializeArray).pipe(dematerialize()).subscribe(data => {
      this.deMaterializeArray.push(data)
    })
    
  }

  observeOnArray=new Array()
  observeOnUsage() {
    this.observeOnArray.push(0)
    this.source.pipe(observeOn(asyncScheduler),map(x=> x*10)).subscribe(data => {
      this.observeOnArray.push(data)
    })
    this.observeOnArray.push(10)
  }

  subscribeOnArray=new Array()
  subscribeOnUsage() {
    this.subscribeOnArray.push(0)
    this.source.pipe(subscribeOn(asyncScheduler),map(x=> x*10)).subscribe(data => {
      this.subscribeOnArray.push(data)
    })
    this.subscribeOnArray.push(10)
  }
  

  toArray=new Array()
  toArrayUsage() {
    this.source.pipe(toArray()).subscribe(data => {
      this.toArray=data;
    })
  }

}
