import { Component, OnInit } from '@angular/core';
import { map, mapTo, of } from 'rxjs';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mapOperator()
    this.mapToOperator()
  }

  mapArray=new Array()
  mapOperator() {
    of(1,2,3,4).pipe(map(x => x *10)).subscribe(data=>{
      this.mapArray.push(data)
    })
  }

  mapToArray=new Array()
  mapToOperator() {
    of(1,2,3,4).pipe(mapTo(10)).subscribe(data=>{
      this.mapToArray.push(data)
    })
  }

}
