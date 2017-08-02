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
    return this.http.post('https://mighty-headland-68035.herokuapp.com/createEmail',
    {to, from, hashes})
    .map(res => res.json());
  }
}
