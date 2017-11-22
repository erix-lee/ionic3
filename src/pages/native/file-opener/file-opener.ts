import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
/**
 * Generated class for the FileOpenerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-opener',
  templateUrl: 'file-opener.html',
})
export class FileOpenerPage {

  constructor(private fileOpener: FileOpener) { }
  open() {
    this.fileOpener.open('path/to/file.pdf', 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FileOpenerPage');
  }

}
