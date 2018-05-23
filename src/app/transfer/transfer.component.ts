import { Component, OnInit, Input } from '@angular/core';
import { IpfsService } from './../ipfs.service';
import { EmailService } from './../email.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  providers: [EmailService]
})
export class TransferComponent implements OnInit {
  @Input() parentSize: number;

  hashes: any;
  name: string;
  magnetURI: string;
  postData: string;
  data: any;

  constructor(private ipfsService: IpfsService, private emailService: EmailService) { }

  ngOnInit() {
    this.hashes = [];
  }

  upload = ($event) => {
    const file = $event.target.files[0];
    this.name = file.name;
    this.parentSize = file.size;

    this.ipfsService.uploadIPFS(file)
      .then((torrent) => {
        this.hashes.push(torrent);
      });
  }
}
