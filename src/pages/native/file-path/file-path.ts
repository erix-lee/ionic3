import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FilePath } from '@ionic-native/file-path';
/**
 * Generated class for the FilePathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-path',
  templateUrl: 'file-path.html',
})
export class FilePathPage {

  constructor(private filePath: FilePath) { }
  resolveNativePath(){
    let path="";
    this.filePath.resolveNativePath(path)
    .then(filePath => console.log(filePath))
    .catch(err => console.log(err));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePathPage');
  }

}
