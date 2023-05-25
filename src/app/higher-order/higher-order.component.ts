import { Component, OnInit } from '@angular/core';
import { concatMap, concatMapTo, exhaustMap, map, mergeMap, mergeMapTo, of, switchMap, switchMapTo } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-higher-order',
  templateUrl: './higher-order.component.html',
  styleUrls: ['./higher-order.component.css']
})
export class HigherOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mergeMapOperator()
    this.mergeMapToOperator()

    this.concatMapOperator()
    this.concatMapToOperator()

    this.switchMapOperator()
    this.switchMapToOperator()

    this.exhaustMapOperator()
  }

  mergeMapRes=new Array()
  mergeMapOperator(){

    of(1,2,3).pipe(
      mergeMap(ids => ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/${ids}`).pipe(map(response => response.response)),2)
    ).subscribe(data => {
      this.mergeMapRes.push(data);
    }) 
  }

  mergeMapToRes=new Array()
  mergeMapToOperator(){

    of(1,2,3).pipe(
      mergeMapTo(ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/1`).pipe(map(response => response.response)),2)
    ).subscribe(data => {
      this.mergeMapToRes.push(data);
    }) 
  }

  concatMapRes=new Array()
  concatMapOperator(){

    of(1,2,3).pipe(
      concatMap(ids => ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/${ids}`).pipe(map(response => response.response)))
    ).subscribe(data => {
      this.concatMapRes.push(data);
    }) 
  }

  concatMapToRes=new Array()
  concatMapToOperator(){

    of(1,2,3).pipe(
      concatMapTo(ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/1`).pipe(map(response => response.response)))
    ).subscribe(data => {
      this.concatMapToRes.push(data);
    }) 
  }

  switchMapRes=new Array()
  switchMapOperator(){

    of(1,2,3).pipe(
      switchMap(ids => ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/${ids}`).pipe(map(response => response.response)))
    ).subscribe(data => {
      this.switchMapRes.push(data);
    }) 
  }

  switchMapToRes=new Array()
  switchMapToOperator(){

    of(1,2,3).pipe(
      switchMapTo(ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/1`).pipe(map(response => response.response)))
    ).subscribe(data => {
      this.switchMapToRes.push(data);
    }) 
  }

  exhaustMapRes=new Array()
  exhaustMapOperator(){

    of(1,2,3).pipe(
      exhaustMap(id => ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/${id}`).pipe(map(response => response.response)))
    ).subscribe(data => {
      this.exhaustMapRes.push(data);
    }) 
  }

}
