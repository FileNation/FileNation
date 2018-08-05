import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmailService } from './../email.service';
import { IpfsService } from '../ipfs.service';
import { TweenMax } from 'gsap';
import { DOCUMENT } from '@angular/platform-browser';
import { Buffer } from 'buffer';

import { DragZoneComponent } from '../dragzone/dragzone.component';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
const MULTIPLE_REGEX = /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(,+ )?)+$/;
const TEXT_REGEX = /^[a-zA-Z0-9-]/;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  postData: string;
  data: any;
  hash: any;
  hashes: any;
  name: string;
  parentSize: any;
  file: any;
  files: any;
  temp: any;
  submit: boolean;
  submitResponse: boolean;
  form: boolean;
  progress: number;
  showUpdate: boolean;
  completed: number;
  totalFiles: number;
  animated: boolean;
  size: any;
  color = '#168ccc';
  mode = 'indeterminate';
  node: any;

  constructor(@Inject(DOCUMENT) private document: any, private emailService: EmailService, private ipfsService: IpfsService) {

    this.data = {
      to: '',
      from: '',
      message: '',
      hashes: ''
    }
  }

  ngOnInit() {
    this.animated = false;
    // change to upload maybe?
    this.totalFiles = 0;
    this.completed = 0;
    this.hashes = [];
    this.file = [];
    this.files = [];
    this.submit = false;
    this.submitResponse = false;
    this.form = true;
    this.progress = this.ipfsService.progress;
    this.showUpdate = false;
  }

  animateStyles() {
    if (!this.animated) TweenMax.to(this.document.getElementById('animatedLoader'),
    1, { scrambleText: { text: 'sending through IPFS', chars: '10', revealDelay: 0.1, speed: 0.3 } }),
    this.animated = true;
  }
  @ViewChild('pond') pond: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png'
  }

  pondHandleInit() {
    console.log('FilePond has initialised', this.pond);
  }

  //Verifies email inputs
  toEmailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(MULTIPLE_REGEX)]);
  fromEmailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
    messageFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(TEXT_REGEX)]);

      onPost() {
        this.onFilePost().then(res => this.onTestPost());
      }

      onFilePost() {
        return new Promise((resolve, reject) => {
          this.files.forEach(el => {
            var reader = new FileReader();
            reader.onload = (e) => {
              this.ipfsService.uploadIPFS(reader.result)
              .then((ipfsObject) => {
                try {
                  this.file.push('https://ipfs.io/ipfs/' + ipfsObject);
                  this.data.hashes = (this.file)
                  this.completed++;
                } catch (e) {
                  console.log(e)
                }
              }).then(() => {
                if (this.totalFiles == this.completed) {
                  resolve();
                }
              });
            }
            reader.readAsArrayBuffer(el);
          })
        })
      }

      //Called when form is submitted
      onTestPost() {
      if (!this.data.to.match(MULTIPLE_REGEX)) alert(`Invalid Recipient, please verify recpient's email!`);
      else if (!this.data.from.match(EMAIL_REGEX)) alert(`Invalid Sender, please verify senders's email!`);
      else if (!(this.data.message.length === 0) && (!this.data.message.match(TEXT_REGEX))) alert(`Invalid message.`);
      else {
        if (this.data.to) {
          this.form = false;
          this.submit = true;
          setTimeout(() => {
            this.submit = false;
            this.submitResponse = true;
          }, 4000);
          this.emailService.sendEmail(this.data.to, this.data.from, this.data.message, this.data.hashes)
          .subscribe(
            data => {
              this.postData = JSON.stringify(data),
              console.log('POST', this.postData)
            },
            error => console.log("Error 123", error)
          );
        }
        else {
          alert("Files uploading...");
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
    setInterval(() => this.progress = this.ipfsService.progress), 500;
  }

  //Called when user opts to upload / send another file
  refresh() {
  this.totalFiles = 0;
  this.completed = 0;
  this.hashes = [];
  this.file = [];
  this.files = []
  this.submit = false;
  this.submitResponse = false;
  this.form = true;
  this.data.to = '';
  this.data.from = '';
  this.data.message = '';
  this.showUpdate = false;
}

<<<<<<< HEAD
upload(event: any) {
  console.log(event)
  let file = event.file.file;
  this.totalFiles++
  this.files.push(file)
}
=======
  upload = ($event) => {
    if (!this.file.length) {
      this.showUpdate = true;
      let concatSize = 0;
      let file = Object.keys($event.target.files).map(key => $event.target.files[key]);
      let concatName = file.map(el => {
        concatSize += el.size;
        this.totalFiles++;
        return el.name;
      }).join(' ');
      this.name = concatName;
      this.parentSize = concatSize;
      file.forEach((el) => {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.ipfsService.uploadIPFS(reader.result)
            .then((hash) => {
              try {
                this.file.push('https://ipfs.io/ipfs/' + hash );
                this.data.hashes = (this.file)
              } catch (e) {
                console.log(e)
              }
            }).then(() => {
              this.completed++
            });
        }
        reader.readAsArrayBuffer(el);
      })
    }
    else {
      alert("Sorry, still uploading previous file!")
    }
  }
>>>>>>> develop
}
