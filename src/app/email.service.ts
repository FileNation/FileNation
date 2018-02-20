import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {InputComponent} from './input/input.component';
@Injectable()
export class EmailService {

  constructor(private http: Http) {
    this.http = http;

  }

  sendEmail(to, from, message, hashes) {
    return this.http.post('http://174.138.5.9/api/createEmail/',
    {to, from, message, hashes})
    .map(res => res.json());
  }
}
