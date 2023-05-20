import { Component, OnInit } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  counts = new Array();
  countObservable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  constructor() { }

  ngOnInit(): void {
    this.countObservable$.pipe(
        filter(num => num%2==0),
        map(num => num+' is even')
      )
      .subscribe(data => this.counts.push(data))  
  }

}
