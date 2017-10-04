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

  option = false;
  login = false;
  signup = false;
  loggedin = true;

  onSignup() {
    this.loggedin = true;
    this.option = false;
    this.login = false;
    this.signup = false;
  }

  onSignin() {
    this.loggedin = true;
    this.option = false;
    this.login = false;
    this.signup = false;
  }


  buttonClick1() {
    this.option = false;
    this.login = true;
    this.signup = false;
  }

  buttonClick2() {
    this.option = false;
    this.signup = true;
    this.login = false;
  }


}
