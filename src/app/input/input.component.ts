import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { EmailService } from './../email.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  postData:string;
  constructor(private emailService: EmailService) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

    onTestPost() {
      this.emailService.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
    }
  }
