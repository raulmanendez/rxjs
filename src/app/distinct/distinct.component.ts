import { Component, OnInit } from '@angular/core';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css']
})
export class DistinctComponent implements OnInit {

  constructor() { }
 

  ngOnInit(): void {
    this.distinctOperator()
    this.distinctWithKeyOperator()

    this.distinctUntilChanged()
    this.distinctUntilChangedWithArgs()

    this.distinctUntilKeyChanged()
  }

  distinctArr=new Array();
  distinctOperator(){
    of(1,2,3,4,1,3,4).pipe(distinct()).subscribe(data => {
      this.distinctArr.push(data);
    }) 
  }

  distinctWithKeyArr=Array()
  distinctWithKeyOperator(){
    let students= [
      {id:1,name:"Mukesh"},
      {id:2,name:"Bhupeesh"},
      {id:3,name:"Mukesh"},
    ]

    from(students).pipe(distinct(x => x.name)).subscribe(data=>{
      this.distinctWithKeyArr.push(data);
    })
  }

  distinctUntillChangedArr=new Array()
  distinctUntilChanged() {
    of(1,2,3,3,4,5,4).pipe(distinctUntilChanged()).subscribe(data => {
      this.distinctUntillChangedArr.push(data)
    })
  }

  distinctUntillChangedWithArgsArr=new Array()
  distinctUntilChangedWithArgs() {
    let students= [
      {id:1,name:"Mukesh"},
      {id:3,name:"Mukesh"},
      {id:2,name:"Bhupeesh"},
    ]

    from(students).pipe(distinctUntilChanged(
      (prev,next) => {
        return prev==next;
      },
      (stud) => stud.name
    ))
    .subscribe(data => {
      this.distinctUntillChangedWithArgsArr.push(data)
    })
  }

  distinctUntillKeyChanged=new Array()
  distinctUntilKeyChanged() {
    let students= [
      {id:1,name:"Mukesh"},
      {id:2,name:"Mukesh"},
      {id:3,name:"Bhupeesh"},
      {id:4,name:"Bhupeesh"},
      {id:5,name:"Mukesh"},
      {id:6,name:"Bhupeesh"},
    ]

    from(students).pipe(distinctUntilKeyChanged(
      'name',
      (prev,next) => {
        return prev==next;
      }
    ))
    .subscribe(data => {
      this.distinctUntillKeyChanged.push(data)
    })
  }

}
