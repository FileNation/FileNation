import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import webtorrent from 'webtorrent';
import {Buffer} from 'buffer';
import IPFS from 'ipfs';
import {bs58} from 'bs58'
import {Importer} from 'ipfs-unixfs-engine';
import streamBuffers from 'stream-buffers';


@Injectable()
export class IpfsService {
  client: any;
  http: Http;
  node: any;
  progress: number;

  constructor(http: Http) {
    this.http = http;
    // Create an IPFS node
    this.client = new webtorrent();
    console.log('working');

     const repoPath = 'ipfs-' + Math.random()

    this.node = new IPFS({
       repo: 'ipfs-' + Math.random()
     })

     this.node.on('ready', () => console.log('Online status: ', this.node.isOnline() ? 'online' : 'offline'))
}
  uploadIPFS = (fileObj) => {
    console.log('----------')
    console.log(fileObj);
    console.log('----------')
    return new Promise((resolve, reject) => {
      this.client.seed(fileObj, (torrent) => {
        torrent.files[0].getBuffer((err, buffer) => {

          this.progress = 0;
        let myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
          chunkSize: 9000000   //determines data transfer rate
        });
          this.node.files.createAddStream((err, stream) => {
            console.log('ERR', err)
            console.log('STREAM', stream)
            stream.on('data', (file) => {
              console.log('FILE', file)
              resolve(file);
            })
            console.log('WRITE');
              myReadableStreamBuffer.on('data', (chunk) => {
                this.progress += chunk.byteLength
                console.log('Progress', this.progress);

              myReadableStreamBuffer.resume()

            })


            stream.write(myReadableStreamBuffer);

            myReadableStreamBuffer.put(Buffer.from(buffer))
            myReadableStreamBuffer.stop()

            myReadableStreamBuffer.on('end', () => {
            console.log('stream ended.')
            stream.end()
            })
            myReadableStreamBuffer.resume()
          })

        })
      });
    });
  }

}
