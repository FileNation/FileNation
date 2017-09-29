import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  option = true;
  login = false;
  signup = false;

  buttonClick1() {
    this.option = false;
    this.login = true;
  }

  buttonClick2() {
    this.option = false;
    this.signup = true;
  }

}
