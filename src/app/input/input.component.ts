import {Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { EmailService } from './../email.service';
import { IpfsService } from './../ipfs.service';

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
  sicart: any;
  fuck: any;

  constructor(private emailService: EmailService, private ipfsService: IpfsService) {


    this.data = {
      to: '',
      from: '',
      hashes: ''
    }
  }
  ngOnInit() {
    this.hashes = [];
    this.sicart = [];
  };



  toEmailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
    fromEmailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);

      onTestPost() {
        this.emailService.sendEmail(this.data.to, this.data.from, this.data.hashes)
        .subscribe(
          data => this.postData = JSON.stringify(data),
          error => console.log(error),
          () => console.log("Finished")
        );
      }
      upload = ($event) => {

        if (this.sicart.length < 1) {
        var file = $event.target.files[0];
        console.log('file: ', file);
        this.name = file.name;
        this.parentSize = file.size;


          this.ipfsService.uploadIPFS(file)
          .then((torrent) => {
            this.hashes.push(torrent);
            this.sicart.push(this.hashes.map((el) =>  '<br>' + 'https://gateway.ipfs.io/ipfs/' + el[0].hash + '<br><br>'))
            this.fuck = this.sicart;
            console.log('bf:', this.data);
            this.data.hashes = (this.fuck)
            console.log('after:', this.data);
          });
        }
        else {
          alert("Sorry, working to upload more files!")
        }

      }
    }
