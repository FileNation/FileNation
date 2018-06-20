import { Component, OnInit, Input } from '@angular/core';

import { environment }        from '../../environments/environment';
import { FilesService }       from '../files.service';

@Component({
  selector: 'app-downloadfile',
  templateUrl: './downloadfile.component.html',
  styleUrls: ['./downloadfile.component.scss']
})
export class DownloadfileComponent implements OnInit {

  @Input() file: object;
  private icon = 'mdi-file';
  private name = 'Document';

  downloadFile() {

  }

  constructor(private filesService: FilesService) { }

  downloadFile() {
    const file = {
      url: `${environment.ipfsGateway}/${this.file.hash}`,
      type: this.file.filetype
    };

    this.filesService.downloadFile(file);
  }

  ngOnInit() {
    switch(this.file.filetype) {
      case 'png':
      case 'jpeg':
      case 'gif':
      case 'jpg':
        this.icon = 'mdi-file-image';
        this.name = 'Image';
        break;
      case 'xls':
      case 'xlsx':
      case 'xlsm':
      case 'xltx':
      case 'xlt':
      case 'csv':
        this.icon = 'mdi-file-excel';
        this.name = 'Excel type document';
        break;
      case 'mp3':
      case 'wav':
        this.icon = 'mdi-file-music';
        this.name = 'Music file';
        break;
      case 'pdf':
        this.icon = 'mdi-file-pdf';
        this.name = 'PDF File';
        break;
      case 'ppt':
      case 'pptx':
      case 'xps':
      case 'potx':
      case 'pot':
      case 'ppsx':
      case 'odp':
        this.icon = 'mdi-file-powerpoint';
        this.name = 'Powerpoint document';
        break;
      case 'mkv':
      case 'flv':
      case 'vob':
      case 'ogv':
      case 'drc':
      case 'gifv':
      case 'mng':
      case 'avi':
      case 'mov':
      case 'qt':
      case 'wmv':
      case 'amv':
      case 'mp4':
      case 'm4p':
      case 'mpg':
      case 'mp2':
      case 'mpeg':
      case 'mpe':
      case 'mpv':
      case 'm2v':
      case '2gp':
      case '3g2':
      case 'mxf':
      case 'roq':
      case 'nsv':
      case 'flv':
      case 'f4v':
      case 'f4p':
      case 'f4a':
      case 'f4b':
        this.icon = 'mdi-file-video';
        this.name = 'Video file';
        break;
      case 'doc':
      case 'docx':
      case 'dotx':
      case 'docb':
        this.icon = 'mdi-file-word';
        this.name = 'Word document';
        break;
      case 'xml':
        this.icon = 'mdi-file-xml';
        this.name = 'XML file';
        break;
      default:
    }
  }

}
