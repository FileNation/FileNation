import { Component, OnInit  } from '@angular/core';
import { IpfsService } from './ipfs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ipfsService: IpfsService) {}

  ngOnInit() {
    
  }
}
