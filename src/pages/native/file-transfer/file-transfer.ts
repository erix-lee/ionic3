import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/**
 * Generated class for the FileTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-transfer',
  templateUrl: 'file-transfer.html',
})
export class FileTransferPage {
  fileTransfer: FileTransferObject;

  constructor(private transfer: FileTransfer, private file: File) {
    this.fileTransfer = this.transfer.create();
   }
  upload() {
    let options: FileUploadOptions = {
       fileKey: 'file',
       fileName: 'name.jpg',
       headers: {}
       
    }
  
    this.fileTransfer.upload('<file path>', '<api endpoint>', options)
     .then((data) => {
       // success
     }, (err) => {
       // error
     })
  }
  
  download() {
    const url = 'http://www.example.com/file.pdf';
    this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FileTransferPage');
  }

}
