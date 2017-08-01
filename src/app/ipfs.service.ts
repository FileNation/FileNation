import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import webtorrent from 'webtorrent';
import {Buffer} from 'buffer';
import Ipfs from 'ipfs';
import {bs58} from 'bs58'
import {Importer} from 'ipfs-unixfs-engine';



@Injectable()
export class IpfsService {
  client: any;
  http: Http;
  node: any;


  constructor(http: Http) {
    this.http = http;
    // Create an IPFS node
    this.client = new webtorrent();
    console.log('working');

  //   const repoPath = 'ipfs-' + Math.random()
  //
  //   // Create an IPFS node
  //   this.node = new Ipfs({
  //     init: false,
  //     start: false,
  //     repo: repoPath
  //   })
  //
  //   // Init the node
  //   this.node.init(this.handleInit)
  // }
  //
  // handleInit = (err) => {
  //   if (err) {
  //     throw err
  //   }
  //
  //   this.node.start(() => {
  //     console.log('Online status: ', this.node.isOnline() ? 'online' : 'offline');
  //   })
  }

  uploadIPFS = (arg) => {
    console.log(arg);
    return new Promise((resolve, reject) => {
      this.client.seed(arg, (torrent) => {
        // torrent.files[0].getBuffer((err, buffer) => {
        // this.node.files.add(buffer, (err, res) => {
        // if (err || !res) {
        //   return reject(err);
        // }
        // // console.log(res);
        // })
        resolve(torrent);
        // })
      });
    });
  }

}
