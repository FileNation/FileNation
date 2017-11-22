import {Component, OnInit, ElementRef, AfterViewInit, ViewChild, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { EmailService } from './../email.service';
import { IpfsService } from '../ipfs.service';
import { TweenMax } from 'gsap';
import { DOCUMENT } from '@angular/platform-browser';

import {DragZoneComponent } from '../dragzone/dragzone.component'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
const MULTIPLE_REGEX = /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(,+ )?)+$/;

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
  completed: number;
  totalFiles: number;
  animated: boolean;

  constructor(@Inject(DOCUMENT) private document:any, private emailService: EmailService, private ipfsService: IpfsService) {

    this.data = {
      to: '',
      from: '',
      hashes: ''
    }

  }

  ngOnInit() {
    //change to upload maybe?
    this.totalFiles = 0;
    this.completed = 0;
    this.hashes = [];
    this.file = [];
    this.submit = false;
    this.submitResponse = false;
    this.form = true;
    this.progress = this.ipfsService.progress;
    this.showUpdate = false;
    this.getTransfer();
    this.animated = false;
}

animationController = () => {
  if (!this.animated) {
    this.animated = true;

    TweenMax.to(this.document.getElementById('lolwut'), 2,
      {scrambleText:{text:'Welcome to the decentralized cloud.', chars:'01', revealDelay:0.5, speed:0.1}});

    setTimeout( () => TweenMax.to(this.document.getElementById('lolwut'), 2,
      {scrambleText:{text:'Send files to one across the planet, using the IPFS', chars:'01', revealDelay:0, speed:0.1}}),4500);

    setTimeout( () => TweenMax.to(this.document.getElementById('lolwut'), 2,
      {scrambleText:{text:'Drag your files, or use the button above to upload.', chars:'01', revealDelay:0, speed:0.1}}),9000);
  }
}

//Verifies email inputs
toEmailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(MULTIPLE_REGEX)]);
fromEmailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);

//Called when form is submitted
onTestPost() {
  console.log('REGEX!!!!!!!!!!!!!!!!!', this.data.to.match(MULTIPLE_REGEX))
  if (!this.data.to.match(MULTIPLE_REGEX)) alert (`Invalid Recipient, please verify recpient's email!`);
  else if (!this.data.from.match(EMAIL_REGEX)) alert (`Invalid Sender, please verify senders's email!`);
  else {
    if (this.file.length && this.data.to) {
      console.log(this.data.to);
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
}

//Called when user opts to change the selected file
toggleFile() {
  this.totalFiles = 0;
  this.completed = 0;
  this.hashes = [];
  this.file.length = [];
  this.showUpdate = false;

}

getTransfer() {
  setInterval( ()=>this.progress = this.ipfsService.progress), 500;
}

//Called when user opts to upload / send another file
refresh() {
  this.totalFiles = 0;
  this.completed = 0;
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
  console.log('BANANANANANANANANNA', $event.type);
  if (!this.file.length) {
    this.showUpdate = true;
    let concatSize = 0;
    let file = Object.keys($event.target.files).map(key => $event.target.files[key]);
    let concatName = file.map(el => {
      concatSize += el.size;
      this.totalFiles++;
      return el.name;
    }).join(' and ');
    this.name = concatName;
    this.parentSize = concatSize;
    file.forEach( (el, key) => {
      this.ipfsService.uploadIPFS(el)
      .then((torrent) => {
        try {
          this.hashes.push(torrent);
          this.file.push('<br>' + 'https://ipfs.io/ipfs/' + this.hashes[key].hash + '<br><br>');
          this.data.hashes = (this.file)
        } catch (e) {
          console.log('ERROR:', e)
        }
      }).then(() => {
        this.completed++
      });
    })
  }
  else {
    alert("Sorry, still uploading previous file!")
  }
}

    }
