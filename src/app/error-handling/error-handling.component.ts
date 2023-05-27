import { Component, OnInit } from '@angular/core';
import { Observable, catchError, delay, delayWhen, of, retry, retryWhen, tap } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.catchErrorOperator()
    this.retryOperator()
    this.retryWhenOperator()
  }

  catchErrorArray=new Array();
  catchErrorOperator() {
    let source=new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('error occured')
    })

    source.pipe(catchError((err,caught) => {
      return of('A','B');
    })).subscribe(data => {
      this.catchErrorArray.push(data);
    })

  }

  retryArray=new Array();
  retryOperator() {
    let source=new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('error occured')
    })

    source.pipe(
    retry(1),
    catchError((err,caught) => {
      return of('A','B');
    })).subscribe(data => {
      this.retryArray.push(data);
    })

  }


  retryWhenArray=new Array();
  retryWhenOperator() {

    let data={
      users: [ {id:1,name:"mukesh"},{id:2,name:"bhupesh"} ],
      proceed:1
    }
    let source= of(...data.users)

    source.pipe(
      tap(user =>{
          if(data.proceed<5) {
            throw 'proceed is very low';
          }
          
      }),
    retryWhen(error =>{
      return error.pipe(
        tap(error => {
          data.proceed++
          this.retryWhenArray.push(data.proceed)
          console.log(data.proceed,"retrying after increasing proceed......")
        })
      )
    }),
    delay(10000)
    ).subscribe(
    (data) => {
      //this.retryWhenArray.push(data);
    },
    error => {
      console.log("error in subscription...")
    })
  }


}
