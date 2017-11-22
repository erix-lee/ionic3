import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Zip } from '@ionic-native/zip';


@IonicPage()
@Component({
  selector: 'page-zip',
  templateUrl: 'zip.html',
})
export class ZipPage {

  constructor(private zip: Zip) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZipPage');
  }
  unzip(){
    this.zip.unzip('path/to/source.zip', 'path/to/dest', (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
    .then((result) => {
      if(result === 0) console.log('SUCCESS');
      if(result === -1) console.log('FAILED');
    });
  }
}
