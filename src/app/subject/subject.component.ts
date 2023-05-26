import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  subjectData=new Array()
  ngOnInit(): void {

    let subject$=new Subject<number>();

    subject$.subscribe(data => {
      this.subjectData.push(data);
    })

    subject$.next(1);
    subject$.next(2);
    subject$.next(3);
  }

}
