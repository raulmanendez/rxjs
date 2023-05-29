import { Component, OnInit } from '@angular/core';
import { defer, generate, of, range } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generateUsage()
    this.rangeUsage()
    this.deferOperatorUsage()

    this.ajaxOperator()
    this.ajaxGetJsonOperator()
  }

  generateArray=new Array()
  generateUsage() {
    generate(10, x => x <20, x => x+2).subscribe(data=> {
      this.generateArray.push(data)
    })

    generate({
      initialState: 10,
      condition(value) { return value < 20; },
      iterate(value) { return value + 1; },
      resultSelector(value:number) { return value * 10; }
    }).subscribe(data => {
      this.generateArray.push(data)
    });
  }

  rangeArray=new Array()
  rangeUsage() {
    range(4,10).subscribe(data=>{
      this.rangeArray.push(data);
    })

  }

  deferArray1 = new Array()
  deferArray2 = new Array()
  deferOperatorUsage() {
    let source$ = defer(() => {
      if (Math.random() > 0.5) {
        return of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      } else {
        return of('A', 'B', 'C', 'D', 'E', 'F')
      }
    })

    source$.subscribe(data => {
      this.deferArray1.push(data);
    })

    source$.subscribe(data => {
      this.deferArray2.push(data);
    })
  }

  normalAjaxData = new Object();
  ajaxOperator() {
    ajax("https://my-json-server.typicode.com/raulmanendez/json-server/posts").subscribe(data => {
      this.normalAjaxData = data;
    })
  }

  ajaxgetJSONData: any
  ajaxGetJsonOperator() {
    ajax.getJSON("https://my-json-server.typicode.com/raulmanendez/json-server/posts").subscribe(data => {
      this.ajaxgetJSONData = data;
    })

    ajax({
      headers: {},
      url: '',
      method: 'POST',
      body: {}
    })
  }

}
