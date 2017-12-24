import { Component, OnInit, Inject } from '@angular/core';
import { IpfsService } from './ipfs.service';
import { TweenMax } from 'gsap';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: any, private ipfsService: IpfsService) {}

  ngOnInit() {
    TweenMax.to(this.document.getElementById('title'),
      2, {scrambleText:{text:'Filenation.io', chars:' ', revealDelay:0.5, speed:0.1}});
  }
}
