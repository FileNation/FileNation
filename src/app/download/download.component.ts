import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { JSZip }                        from 'jszip';

import { Subject }                      from 'rxjs';

import { environment }        from '../../environments/environment';
import { FilesService }       from '../files.service';

const zip = new JSZip();
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  hash: number;
  private sub: any;
  private loading = true;
  private timeLeft = '';
  private expiredDownload = false;
  private filesReady = false;
  private data: Object;
  private urls: Array<String>;
  private expiresTimer: String;
  private expiresInterval: any;

  downloadDataObservable = new Subject<Object>();

  constructor(private filesService: FilesService, private route: ActivatedRoute) { }

  backHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.hash = params['id']; // (+) converts string 'id' to a number
        this.filesService.getHashInfo(this.hash, (data) => {
        if(data.errors) {
          this.expiredDownload = true;
        } else {
          console.log(data);
          this.downloadDataObservable.next(data);
          this.data = data;
          this.startExpiresTimer(data.dateExpire);
          this.urls = data.files.map((file) => {
              return {
                url: `${environment.ipfsGateway}/${file.hash}`,
                type: file.filetype
              }
            }
          );
          this.loading = false;
        }
        })
    });
  }

  startExpiresTimer(date) {
    const expireDate = new Date(date);
    console.log(expireDate.toUTCString());
    console.log(expireDate.getTime());
    setInterval(() => {
      var str = "" + 1
      var pad = "00"

    const timeLeft = [];
      // get total seconds between the times
    var delta = expireDate.getTime() - Date.now();
    if(delta < 0) {
      this.expiredDownload = true;
      this.stopExpiresTimer();
    } else {
      delta = Math.abs(delta) / 1000;
    }
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
    this.timeLeft = {
      days,
      daysFormat: days.toString().padStart(2, '0'),
      hours,
      hoursFormat: hours.toString().padStart(2, '0'),
      minutes,
      minutesFormat: minutes.toString().padStart(2, '0'),
      seconds,
      secondsFormat: seconds.toString().padStart(2, '0'),
    }
      this.expireTimer = this.timeLeft;
    }, 1000)

  }

  stopExpiresTimer() {
    clearInterval(this.expiresInterval);
  }

  downloadFiles() {
    this.filesService.downloadFiles(this.urls);
  }

  ngOnDestroy() {
    this.stopExpiresTimer();
    this.sub.unsubscribe();
  }

}
