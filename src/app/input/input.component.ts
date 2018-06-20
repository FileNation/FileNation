import { Component, OnInit, Inject }  from '@angular/core';
import { FormControl, Validators }    from '@angular/forms';
import { MatDatepickerInputEvent }    from '@angular/material/datepicker'
import { DOCUMENT }                   from '@angular/platform-browser';
import { TweenMax }                   from 'gsap';
import { Buffer }                     from 'buffer';

import { DragZoneComponent }  from '../dragzone/dragzone.component';
import { environment }        from '../../environments/environment';
import { IpfsService }        from '../ipfs.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
const MULTIPLE_REGEX = /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(,+ )?)+$/;
const TEXT_REGEX = /^[a-zA-Z0-9-]/;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  postData: string;
  data: any;
  hashes: any;
  name: Array<any[]>;
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
  size: any;
  color = '#168ccc';
  mode = 'indeterminate';
  node: any;
  filesData: Array<any[]>;

  constructor(@Inject(DOCUMENT)
    private document: any,
    private ipfsService: IpfsService) {

    this.data = {
      to: 'marlon.mbs@gmail.com',
      from: 'marlon.mbs@gmail.com',
      message: '',
      hashes: '',
      dateExpiry: Date.now()
    }
  }

  ngOnInit() {
    this.animated = false;
    this.totalFiles = 0;
    this.completed = 0;
    this.hashes = [];
    this.file = [];
    this.submit = false;
    this.submitResponse = false;
    this.form = true;
    this.progress = this.ipfsService.progress;
    this.showUpdate = false;
    this.filesData = [];
    this.getTransfer();
  }

  animateStyles() {
    if (!this.animated) TweenMax.to(this.document.getElementById('animatedLoader'),
      1, { scrambleText: { text: 'sending through IPFS', chars: '10', revealDelay: 0.1, speed: 0.3 } }),
      this.animated = true;
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

  addEvent(type: string, event: MatDatepickerInputEvent<any>) {
    this.data.dateExpiry = event.value.toDate()
  }

  //Called when form is submitted
  onTestPost() {
    if (!this.data.to.match(MULTIPLE_REGEX)) alert(`Invalid Recipient, please verify recpient's email!`);
    else if (!this.data.from.match(EMAIL_REGEX)) alert(`Invalid Sender, please verify senders's email!`);
    else if (!(this.data.message.length === 0) && (!this.data.message.match(TEXT_REGEX))) alert(`Invalid message.`);
    else {
      if (this.file.length && this.data.to) {
        this.form = false;
        this.submit = true;

        console.log(this.filesData);
        let data = {
          'senderEmail': this.data.from,
          'receiverEmail': this.data.to,
          'message': this.data.message,
          'files': this.filesData,
          'dateExpiry': this.data.dateExpiry
        }

        fetch(environment.backendUrl+'/hash', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(() => {
          this.submit = false;
          this.submitResponse = true;
        })
      }
      else {
        alert("No file selected");
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
    this.submit = false;
    this.submitResponse = false;
    this.form = true;
    this.data.to = '';
    this.data.from = '';
    this.data.message = '';
    this.data.dateExpiry = new Date();
    this.showUpdate = false;
    this.filesData = [];
  }

  upload = ($event) => {
    if (!this.file.length) {
      this.showUpdate = true;
      let concatSize = 0;
      let file = Object.keys($event.target.files).map(key => $event.target.files[key]);
      let concatName = file.map(el => {
        concatSize += el.size;
        this.totalFiles++;
        return el.name;
      });
      this.name = concatName.slice();
      this.parentSize = concatSize;

      file.forEach((el, key) => {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.ipfsService.uploadIPFS(reader.result)
            .then((ipfsObject) => {
              try {
                this.file.push(ipfsObject.hash);
                // this.data.hashes =
                this.filesData.push({hash: ipfsObject.hash, name: el.name, filetype: el.name.substr(el.name.lastIndexOf('.')+1) });
              } catch (e) {
                console.log(e)
              }
            })
            .then(() => {
              this.completed++;
              this.submit = true;
              console.log(this.filesData);
            });
        }
        reader.readAsArrayBuffer(el);
      })
    }
    else {
      alert("Sorry, still uploading previous file!")
    }
  }
}
