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
  @ViewChild('dropin2')
  dropin2;
  @Input() onUpload;
  click() {this.dropin2.nativeElement.click()}
  constructor() {
  }
  emptyClick = () => { console.log('caught') };
  ngOnInit() {
    this.dropin.nativeElement.addEventListener('dragover', function($event) {
      this.disabled = false;
      this.classList.add('nonopaque');
      console.log(this);
    })
    this.dropin.nativeElement.addEventListener('dragleave', function($event) {
      this.disabled = true;
      this.classList.remove('nonopaque');
    })
  }
}
