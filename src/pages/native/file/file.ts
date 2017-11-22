import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { File } from '@ionic-native/file';
/**
 * Generated class for the FilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {

  constructor(private file: File) {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePage');
  }

}
