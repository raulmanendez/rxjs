import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, forkJoin, interval, map, merge, of, partition, race, take, zip } from 'rxjs';

@Component({
  selector: 'app-join-creation',
  templateUrl: './join-creation.component.html',
  styleUrls: ['./join-creation.component.css']
})
export class JoinCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.combineLatestUsage()
    this.concatUsage()
    this.forkJoinUsage()
    this.mergeUsage()
    this.partitionUsage()
    this.raceUsage()
    this.zipUsage()
  }

  combineLatestArray=new Array()
  combineLatestUsage() {
    let source1=interval(1000).pipe(take(5))
    let source2=interval(2000).pipe(take(5))

    combineLatest([source1,source2]).subscribe(data=> {
      this.combineLatestArray.push(data)
    })
  }

  concatArray=new Array()
  concatUsage() {
    let source1=of(1,2,3,4,5,6)
    let source2=of('A','B','C','D','E','F')

    concat(source1,source2).subscribe(data=> {
      this.concatArray.push(data)
    })
  }

  forkJoinArray=new Array()
  forkJoinUsage() {
    let source1=of(1,2,3,4,5,6)
    let source2=of('A','B','C','D','E','F')

    forkJoin([source1,source2]).subscribe(data=> {
      this.forkJoinArray.push(data)
    })
  }

  mergeArray=new Array()
  mergeUsage() {
    let source1=interval(1000).pipe(take(5))
    let source2=interval(1500).pipe(take(5))

    merge(source1,source2).subscribe(data=> {
      this.mergeArray.push(data)
    })
  }


  partitionArray1=new Array()
  partitionArray2=new Array()
  partitionUsage() {
    let source1=of(1,2,3,4,5,6,7,8)

    let data=partition(source1,value => value%2==0);

    data[0].subscribe(data=>{
      this.partitionArray1.push(data)
    }) 

    data[1].subscribe(data=>{
      this.partitionArray2.push(data)
    }) 
  }
  
  raceArray=new Array()
  raceUsage() {
    let source1=interval(1000).pipe(take(5), map(data => "first"+data))
    let source2=interval(2000).pipe(take(5),map(data => "second"+data))
    let source3=interval(3000).pipe(take(5),map(data => "third"+data))

    race(source1,source2,source3).subscribe(data => {
      this.raceArray.push(data);
    })
  }

  zipArray=new Array()
  zipUsage() {
    let source1=of(1,2,3,4,5)
    let source2=of(11,22,33,44,55)
    let source3=of(111,222,333,444)

    zip(source1,source2,source3).subscribe(data => {
      this.zipArray.push(data);
    })
  }
}
