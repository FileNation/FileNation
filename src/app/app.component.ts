import { Component, OnInit, Inject } from '@angular/core';
import { IpfsService } from './ipfs.service';
import { TweenMax } from 'gsap';
import { DOCUMENT } from '@angular/common';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  document: any;
  title = "FileNation";
  constructor(@Inject(DOCUMENT) angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}

}
