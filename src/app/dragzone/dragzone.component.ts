import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-dragzone',
  templateUrl: './dragzone.component.html',
  styleUrls: ['./dragzone.component.css']
})
export class DragZoneComponent implements OnInit {
  @ViewChild('dropin')
  dropin;
  @Input() onUpload;
  click() {this.dropin.nativeElement.click()}
  constructor() { 
  }

  ngOnInit() {
    this.dropin.nativeElement.addEventListener('dragover', function($event) {
      this.classList.add('nonopaque');
      console.log(this.onUpload);
    })
    this.dropin.nativeElement.addEventListener('dragleave', function($event) {
      this.classList.remove('nonopaque');
    })
    this.dropin.nativeElement.addEventListener('drop', function($event) {
      this.classList.remove('nonopaque');
    })
  }


}
