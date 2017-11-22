import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

/**
 * Generated class for the FileChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-chooser',
  templateUrl: 'file-chooser.html',
})
export class FileChooserPage {

  constructor(private fileChooser: FileChooser) { }
  open(){
    this.fileChooser.open()
    .then(uri => console.log(uri))
    .catch(e => console.log(e));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FileChooserPage');
  }

}
