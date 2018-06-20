import { Injectable }                         from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { map }                                from 'rxjs/operators';
import { saveAs }                             from 'file-saver';
import JSZipUtils                             from 'jszip-utils';
import JSZip                                  from 'jszip';

import { InputComponent }   from './input/input.component';
import { environment }      from '../environments/environment';

const zip = new JSZip();

@Injectable()
export class FilesService {

  constructor(private http: Http) {
    this.http = http;
  }

  getHashInfo(hash, cb) {
    const url = `${environment.backendUrl}/hash/${hash}`;
    return this.http.get(url)
    .pipe(map(res => res))
    .subscribe(res => cb(res.json()), error => cb(error.json()));
  }

  getFile(filename, mimetype, cb) {
    return this.http.get(filename,
     { responseType: ResponseContentType.Blob })
    .pipe(map(res => res))
    .subscribe(res => cb(new Blob([res.blob()], { type: mimetype })));
  }

  downloadFiles = (files) => {
    let count = 0;
    console.log(files);
    const zipFilename = "download.zip";
    const filesLength = files.length;
    files.forEach((file, el) => {
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(file.url,  (err, data) =>  {
         if(err) {
            throw err; // or handle the error
         }
         var filename = this.getFileName(file.type, count);
         zip.file(filename, data, {binary:true});
         count++;
         if (count === filesLength) {
           zip.generateAsync({type:'blob'}).then(function(content) {
              saveAs(content, zipFilename);
           });
         }
      });
    });
  }

  getFileName (filetype, count = '0') {
    count = count > 0 ? count : '';
    return `filename${count}.${filetype}`;
  }

  downloadFile = (file) => {
    var blob = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file.url);
    xhr.file = file;
    xhr.getFileName = this.getFileName;
    xhr.getMimeType = this.getMimeType;
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = function()
    {
      var file = this.file;
      const filename = this.getFileName(file.type);
      var blob = new Blob([xhr.response], {type: this.getMimeType(file.type)});
      saveAs(blob, filename);
    }
    xhr.send();
  }

  getMimeType(fileType) {
    const mimeTypes = {
      aac: 'audio/aac',
      abw: 'application/x-abiword',
      arc: 'application/octet-stream',
      avi: 'video/x-msvideo',
      azw: 'application/vndamazonebook',
      bin: 'application/octet-stream',
      bz: 'application/x-bzip',
      bz2: 'application/x-bzip2',
      csh: 'application/x-csh',
      css: 'text/css',
      csv: 'text/csv',
      doc: 'application/msword',
      epub: 'application/epub+zip',
      gif: 'image/gif',
      htm  'text/html',
      html: 'text/html',
      ico: 'image/x-icon',
      ics: 'text/calendar',
      jar: 'application/java-archive',
      jpeg 'image/jpeg',
      jpg: 'image/jpeg',
      js: 'application/javascript',
      json: 'application/json',
      mid:  'audio/midi',
      midi: 'audio/midi',
      mpeg: 'video/mpeg',
      mpkg: 'application/vnd.apple.installer+xml',
      odp: 'application/vnd.oasis.opendocument.presentation',
      ods: 'application/vnd.oasis.opendocument.spreadsheet',
      odt: 'application/vnd.oasis.opendocument.text',
      oga: 'audio/ogg',
      ogv: 'video/ogg',
      ogx: 'application/ogg',
      pdf: 'application/pdf',
      ppt: 'application/vnd.ms-powerpoint',
      rar: 'application/x-rar-compressed',
      rtf: 'application/rtf',
      sh: 'application/x-sh',
      svg: 'image/svg+xml',
      swf: 'application/x-shockwave-flash',
      tar: 'application/x-tar',
      tif:  'image/tiff',
      tiff: 'image/tiff',
      ttf: 'font/ttf',
      vsd: 'application/vnd.visio',
      wav: 'audio/x-wav',
      weba: 'audio/webm',
      webm: 'video/webm',
      webp: 'image/webp',
      woff: 'font/woff',
      woff2: 'font/woff2',
      xhtml: 'application/xhtml+xml',
      xls: 'application/vnd.ms-excel',
      xml: 'application/xml',
      xul: 'application/vnd.mozilla.xul+xml',
      zip: 'application/zip',
      '3gp': 'video/3gpp',
      '3g2': 'video/3gpp2',
      '7z': 'application/x-7z-compressed',
    }

    const mimeType = mimeTypes[fileType];
    return mimeType !== undefined ? mimeType : 'application/octet-stream';

  }
}
