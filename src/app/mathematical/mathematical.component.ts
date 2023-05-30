import { Component, OnInit } from '@angular/core';
import { count, max, min, of, reduce } from 'rxjs';

@Component({
  selector: 'app-mathematical',
  templateUrl: './mathematical.component.html',
  styleUrls: ['./mathematical.component.css']
})
export class MathematicalComponent implements OnInit {

  source=of(1,2,3,4,5,6,7);
  constructor() { }

  ngOnInit(): void {
    this.countUsage()
    this.maxUsage()
    this.minUsage()
    this.reduceUsage()
  }

  totalEven=0;
  countUsage() {
    this.source.pipe(count((value,index)=> {
      return value%2==0;
    })).subscribe(data => {
      this.totalEven=data;
    })
  }

  max=0;
  maxUsage() {
    this.source.pipe(max()).subscribe(data => {
      this.max=data;
    })
  }

  min=0;
  minUsage() {
    this.source.pipe(min()).subscribe(data => {
      this.min=data;
    })
  }

  reduce=0
  accArray=new Array()
  valueArray=new Array()
  reduceUsage() {
    this.source.pipe(reduce((acc,value,index)=>{
      this.accArray.push(acc)
      this.valueArray.push(value)
      return acc+value;
    }))
    .subscribe(data => {
      this.reduce=data
    })
  }

}
