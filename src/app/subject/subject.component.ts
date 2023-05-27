import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, connectable, interval, share, take } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  subjectData = new Array()
  ngOnInit(): void {

    let subject$ = new Subject<number>();

    subject$.subscribe(data => {
      this.subjectData.push(data);
    })

    subject$.next(1);
    subject$.next(2);
    subject$.next(3);

    this.behaviourSubject()
    this.replaySubject()
    this.asyncSubject()
    this.voidSubject()

    this.publishBehaviourOperator()
    this.publishLastOperator()
    this.publishReplyOperator()
  }

  bsArray = new Array()
  behaviourSubject() {
    let bs = new BehaviorSubject(0);

    bs.subscribe(data => {
      this.bsArray.push(data)
    })

    bs.next(11)

    setTimeout(() => {
      bs.subscribe(data => {
        this.bsArray.push(data)
      })
    }, 4000);

    bs.next(12)
  }

  rsArray = new Array()
  replaySubject() {
    let rs = new ReplaySubject(3);

    rs.subscribe(data => {
      this.rsArray.push(data)
    })

    rs.next(3)
    rs.next(4)
    rs.next(5)

    setTimeout(() => {
      rs.subscribe(data => {
        this.rsArray.push(data)
      })
      rs.next(6)
    }, 4000);

    rs.next(7)
  }

  asyncArray = new Array()
  asyncSubject() {
    let as = new AsyncSubject();

    as.subscribe(data => {
      this.asyncArray.push(data)
    })

    setTimeout(() => {
      as.subscribe(data => {
        this.asyncArray.push(data)
      })
    }, 4000);

    as.next(4)
    as.complete()
  }


  voidArray = new Array()
  voidSubject() {
    let vs = new Subject<void>();

    vs.subscribe(data => {
      this.voidArray.push(data + "")
    })


    vs.next()//no need to emit value
    vs.next()
    vs.next()

  }

  publishBehaviourArray=new Array()
  publishBehaviourOperator(){
    let source$ = connectable(interval(1000).pipe(take(10)), {
      connector: () => new BehaviorSubject(100),
    });

    source$.subscribe((data) => {
      this.publishBehaviourArray.push(data)
    });
    setTimeout(() => {
      source$.subscribe((data) => {
        this.publishBehaviourArray.push(data)
      });
    }, 4000);

    source$.connect();
  }

  publishLastArray=new Array()
  publishLastOperator() {
    let source$ = connectable(interval(1000).pipe(take(5)), {
      connector: () => new AsyncSubject(),
    });

    source$.subscribe((data) => {
      this.publishLastArray.push(data)
    });

    setTimeout(() => {
      source$.subscribe((data) => {
        this.publishLastArray.push(data)
      });
    }, 4000);

    source$.connect();
  }

  publishReplayArray=new Array()
  publishReplyOperator(){
    let source$ = interval(1000).pipe(take(10),
      share({ connector: () => new ReplaySubject(2) })
    );

    source$.subscribe((data) => {
      this.publishReplayArray.push(data)
    });
    setTimeout(() => {
      source$.subscribe((data) => {
        this.publishReplayArray.push(data)
      });
    }, 4000);
  }

}
