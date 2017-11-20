import {Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { EmailService } from './../email.service';
import { IpfsService } from '../ipfs.service';

import {DragZoneComponent } from '../dragzone/dragzone.component'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  postData:string;
  data: any;
  hashes: any;
  name: string;
  parentSize: any;
  file: any;
  temp: any;
  submit: boolean;
  submitResponse: boolean;
  form: boolean;
  progress: number;
  showUpdate: boolean;


  constructor(private emailService: EmailService, private ipfsService: IpfsService) {

    this.data = {
      to: '',
      from: '',
      hashes: ''
    }

  }

  ngOnInit() {
    this.hashes = [];
    this.file = [];
    this.submit = false;
    this.submitResponse = false;
    this.form = true;
    this.progress = this.ipfsService.progress;
    this.showUpdate = false;
    this.getTransfer();
}

//Verifies email inputs
toEmailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);
  fromEmailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

//Called when form is submitted
onTestPost() {
  if (this.file.length && this.data.to) {
    this.form = false;
    this.submit = true;
    setTimeout(()=> {
      this.submit = false;
      this.submitResponse = true;
    }, 2000);
  this.emailService.sendEmail(this.data.to, this.data.from, this.data.hashes)
  .subscribe(
    data => {
      this.postData = JSON.stringify(data),
      console.log('POST', this.postData)},
    error => console.log("Error 123", error)
    );
  }
  else {
    alert ("No file selected");
  }
}

//Called when user opts to change the selected file
toggleFile() {
  this.hashes = [];
  this.file.length = [];
  this.showUpdate = false;

}

getTransfer() {
  setInterval( ()=>this.progress = this.ipfsService.progress), 500;
}

//Called when user opts to upload / send another file
refresh() {
  this.hashes = [];
  this.file = [];
  this.submit = false;
  this.submitResponse = false;
  this.form = true;
  this.data.to = '';
  this.data.from = '';
  this.showUpdate = false;
}

upload = ($event) => {
  console.log($event.target.files)
  if (this.file.length < 1) {
    this.showUpdate = true;
    var file = $event.target.files[0];
    this.name = file.name;
    this.parentSize = file.size;
    this.ipfsService.uploadIPFS(file)
    .then((torrent) => {

      this.hashes.push(torrent);

      this.file.push('<br>' + 'https://ipfs.io/ipfs/' + this.hashes[0].hash + '<br><br>');
      this.temp = this.file;
      this.data.hashes = (this.temp)
    });
    }
    else {
      alert("Sorry, still uploading previous file!")
    }
}

    }
