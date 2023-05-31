import { Component, OnInit } from '@angular/core';
import { combineLatest, combineLatestAll, concat, concatAll, exhaustAll, forkJoin, interval, map, merge, mergeAll, of, partition, race, switchAll, take, zip } from 'rxjs';

@Component({
  selector: 'app-join-creation',
  templateUrl: './join-creation.component.html',
  styleUrls: ['./join-creation.component.css']
})
export class JoinCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mergeAllUsage()
    this.switchAllUsage()
    this.exhaustAllUsage()
    this.concatAllUsage()
    this.combineLatestAllUsage()

    this.combineLatestUsage()
    this.concatUsage()
    this.forkJoinUsage()
    this.mergeUsage()
    this.partitionUsage()
    this.raceUsage()
    this.zipUsage()
  }

  mergeAllArray=new Array()
  mergeAllUsage() {
    let source1=interval(1000).pipe(take(4))
    
    source1.pipe(map(count => {
      return interval(500).pipe(take(4))
    }),
    mergeAll()
    ).subscribe(data=> {
      this.mergeAllArray.push(data)
    })
  }

  switchAllArray=new Array()
  switchAllUsage() {
    let source1=interval(1000).pipe(take(4))
    
    source1.pipe(map(count => {
      return interval(500).pipe(take(4))
    }),
    switchAll()
    ).subscribe(data=> {
      this.switchAllArray.push(data)
    })
  }

  exhaustAllArray=new Array()
  exhaustAllUsage() {
    let source1=interval(1000).pipe(take(4))
    
    source1.pipe(map(count => {
      return interval(500).pipe(take(4))
    }),
    exhaustAll()
    ).subscribe(data=> {
      this.exhaustAllArray.push(data)
    })
  }

  concatAllArray=new Array()
  concatAllUsage() {
    let source1=of(1,2,3)
    
    source1.pipe(map(count => {
      return interval(1000).pipe(take(4))
    }),
    concatAll()
    ).subscribe(data=> {
      this.concatAllArray.push(data)
    })
  }

  combineLatestAllArray=new Array()
  combineLatestAllUsage() {
    let source1=of('a','b','c')
    
    source1.pipe(map(x => {
      return interval(1000).pipe(take(4))
    }),
    combineLatestAll()
    ).subscribe(data=> {
      this.combineLatestAllArray.push(data)
    })
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
