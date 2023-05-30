import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, every, find, findIndex, isEmpty, of } from 'rxjs';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {


  source=of(1,2,3,4,5,6,7,8,9)
  constructor() { }

  ngOnInit(): void {
    this.defaultIfEmptyUsage()
    this.everyUsage()
    this.findUsage()
    this.findIndexUsage()
    this.isEmptyUsage()
  }

  defaultIfEmpty=0;
  defaultIfEmptyUsage() {
    of().pipe(defaultIfEmpty(2147)).subscribe(data => {
      this.defaultIfEmpty=data;
    })
  }

  every=true;
  everyUsage() {
    this.source.pipe(every(x => x>1)).subscribe(data => {
      this.every=data;
    })
  }


  find:any;
  findUsage() {
    this.source.pipe(find(x => x>8)).subscribe(data => {
      this.find=data;
    })
  }

  findIndex=0;
  findIndexUsage() {
    this.source.pipe(findIndex(x => x>5)).subscribe(data => {
      this.findIndex=data;
    })
  }

  isEmpty=true;
  isEmptyUsage() {
    this.source.pipe(isEmpty()).subscribe(data => {
      this.isEmpty=data;
    })
  }

}
