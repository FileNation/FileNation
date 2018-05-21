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
  @ViewChild('overlay')
  overlay;
  @Input() onUpload;
  click() { this.dropin2.nativeElement.click() }

  constructor() {
  }

  ngOnInit() {
    this.dropin.nativeElement.addEventListener('dragover', function ($event) {
      this.disabled = false;
      this.classList.add('nonopaque');
    })
    this.dropin.nativeElement.addEventListener('dragon', function ($event) {
      this.disabled = false;
      this.classList.add('nonopaque');
    })
    this.dropin.nativeElement.addEventListener('dragleave', function ($event) {
      this.disabled = true;
      this.classList.remove('nonopaque');
    })
    this.overlay.nativeElement.addEventListener('dragover', function ($event) {
      this.classList.add('overlay');
    })
    this.overlay.nativeElement.addEventListener('dragleave', function ($event) {
      this.classList.remove('overlay');
    })
  }
}
