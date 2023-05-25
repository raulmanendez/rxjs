import { Component, OnInit } from '@angular/core';
import { map, mergeMap, mergeMapTo, of } from 'rxjs';
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
  }

  mergeMapRes=new Array()
  mergeMapOperator(){

    of(1,2,3).pipe(
      mergeMap(ids => ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/${ids}`).pipe(map(response => response.response)))
    ).subscribe(data => {
      this.mergeMapRes.push(data);
    }) 
  }

  mergeMapToRes=new Array()
  mergeMapToOperator(){

    of(1,2,3).pipe(
      mergeMapTo(ajax(`https://my-json-server.typicode.com/raulmanendez/json-server/posts/1`).pipe(map(response => response.response)))
    ).subscribe(data => {
      this.mergeMapToRes.push(data);
    }) 
  }

}
