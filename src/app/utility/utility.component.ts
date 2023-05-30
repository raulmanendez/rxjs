import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {

  source=of(1,2,3,4,5,6,7,8,9)
  constructor() { }

  ngOnInit(): void {
    this.toArrayUsage()
  }

  toArray=new Array()
  toArrayUsage() {
    this.source.pipe(toArray()).subscribe(data => {
      this.toArray=data;
    })
  }

}
