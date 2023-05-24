import { Component, OnInit } from '@angular/core';
import { audit, debounce, elementAt, filter, first, interval, last, of, sample, single, take, throttle } from 'rxjs';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.filterOperator();
    this.sampleOperator()
    this.auditOperator()
    this.throttleOperator()
    this.debounceOperator()
    this.firstOperator()
    this.lastOperator()
    this.more();
  }

  filteredArray = new Array()
  filterOperator() {
    of(1, 2, 3, 4, 5, 6, 7, 8).pipe(filter(x => x % 2 == 0)).subscribe(data => {
      this.filteredArray.push(data);
    })
  }

  sampleArray = new Array();
  sampleOperator() {
    interval(500).pipe(take(10), sample(interval(1000))).subscribe(data => {
      this.sampleArray.push(data);
    })
  }


  auditArray = new Array();
  auditOperator() {
    interval(500).pipe(take(20), audit(ev => interval(1000))).subscribe(data => {
      this.auditArray.push(data);
    })
  }

  throttleArray = new Array();
  throttleOperator() {
    interval(500).pipe(take(20), throttle(ev => interval(1000))).subscribe(data => {
      this.throttleArray.push(data);
    })
  }

  debunceArray = new Array();
  debounceOperator() {
    interval(500).pipe(debounce(ev => interval(ev*100))).subscribe(data => {
      this.debunceArray.push(data);
    })
  }

  first = 0
  firstOperator() {
    of(1, 3, 5, 7, 9).pipe(first()).subscribe(data => {
      this.first = data;
    })

    of(1, 3, 5, 7, 9).pipe(first(x => x < 3)).subscribe(data => {
      this.first = data;
    })
  }

  last = 0
  lastOperator() {
    of(1, 3, 5, 7, 9).pipe(last()).subscribe(data => {
      this.last = data;
    })

    of(1, 3, 5, 7, 9).pipe(last(x => x > 7)).subscribe(data => {
      this.last = data;
    })
  }

  more() {
    this.elementAtOperator();
    this.ignoreElementsOperator();
    this.singleOperator()
  }

  elementAt=0;
  elementAtOperator(){
    of(1,2,3,4,5).pipe(elementAt(2)).subscribe(data => {
      this.elementAt=data;
    })
  }

  ignoreELementComplete=""
  ignoreElementsOperator(){
    interval(1000).pipe(take(5)).subscribe((data) => {
      console.log(data)
    },
    (error)=>{
      console.log(error)
    },
    () => {
      this.ignoreELementComplete="ignore element completed.."
    })
  }

  single=0;
  singleOperator() {
    of(1,2,3,4).pipe(single(x => x > 3)).subscribe(data => {
      this.single=data;
    })
  }

}
