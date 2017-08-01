import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {

  constructor(private http: Http) {
    this.http = http;

  }

  postJSON() {
    var json = JSON.stringify({from: 'hello@alexsicart.com', to: 'alex@sharge.io'});
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://localhost:3000/createEmail',
    params, {
      headers: headers
    })
    .map(res => res.json());
  }
}
