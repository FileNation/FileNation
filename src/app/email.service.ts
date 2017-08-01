import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {InputComponent} from './input/input.component';
@Injectable()
export class EmailService {

  constructor(private http: Http) {
    this.http = http;

  }

  sendEmail(to, from, hashes) {
    // var json = JSON.stringify();
    // var params =  json;
    // var headers = new Headers();

    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://localhost:3000/createEmail',
    {to, from, hashes})
    .map(res => res.json());
  }
}
