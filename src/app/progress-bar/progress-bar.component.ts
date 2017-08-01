import { Component, OnInit, Input } from '@angular/core';
import {TransferComponent} from './../transfer/transfer.component'
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent  {
  @Input() size: number;


  color = 'warn';
  mode = 'buffer';
  value = (100000/this.size)*100;
  bufferValue = 0;

}
