import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ajaxOperator()
    this.ajaxGetJsonOperator()
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
