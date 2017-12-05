import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import webtorrent from 'webtorrent';
import {Buffer} from 'buffer';
import IPFS from 'ipfs';
import {bs58} from 'bs58'
import streamBuffers from 'stream-buffers';


@Injectable()
export class IpfsService {
  client: any;
  http: Http;
  node: any;
  progress: number;
  stream: any;

  constructor(http: Http) {
    this.http = http;
    // Create an IPFS node
    this.client = new webtorrent();

     const repoPath = 'ipfs-' + Math.random()

    this.node = new IPFS({
       repo: 'ipfs-' + Math.random()
     })

     this.node.on('ready', () => console.log('Online status: ', this.node.isOnline() ? 'online' : 'offline'))
}
  uploadIPFS = (fileObj) => {
    return new Promise((resolve, reject) => {
      this.client.seed(fileObj, (torrent) => {
        torrent.files[0].getBuffer((err, buffer) => {

          this.progress = 0;
        let myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
          chunkSize: 900000   //determines data transfer rate
        });
          this.stream = this.node.files.addReadableStream();
            this.stream.on('data', (file) => {
              resolve(file);
            })
              myReadableStreamBuffer.on('data', (chunk) => {
                this.progress += chunk.byteLength

              myReadableStreamBuffer.resume()

            })


            this.stream.write(myReadableStreamBuffer);

            myReadableStreamBuffer.put(Buffer.from(buffer))
            myReadableStreamBuffer.stop()

            myReadableStreamBuffer.on('end', () => {
            this.stream.end()
            })
            myReadableStreamBuffer.resume()

        })
      });
    });
  }

}
