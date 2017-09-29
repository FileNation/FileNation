import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import webtorrent from 'webtorrent';
import {Buffer} from 'buffer';
import IPFS from 'ipfs';
import {bs58} from 'bs58'
import {Importer} from 'ipfs-unixfs-engine';



@Injectable()
export class IpfsService {
  client: any;
  http: Http;
  node: any;


  constructor(http: Http) {
    this.http = http;
    this.client = new webtorrent();

     const repoPath = 'ipfs-' + Math.random()

    this.node = new IPFS({
       repo: 'ipfs-' + Math.random()
     })

     this.node.on('ready', () => console.log('Online status: ', this.node.isOnline() ? 'online' : 'offline'))
}
  uploadIPFS = (arg) => {
    return new Promise((resolve, reject) => {
      this.client.seed(arg, (torrent) => {
        torrent.files[0].getBuffer((err, buffer) => {
        this.node.files.add(buffer, (err, res) => {
        if (err || !res) {
          return reject(err);
        }
        resolve(res);
        })
        })
      });
    });
  }

}
