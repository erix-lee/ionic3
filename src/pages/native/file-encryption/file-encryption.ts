import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FileEncryption } from '@ionic-native/file-encryption';
/**
 * Generated class for the FileEncryptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-encryption',
  templateUrl: 'file-encryption.html',
})
export class FileEncryptionPage {

  constructor(private fileEncryption: FileEncryption) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileEncryptionPage');
  }
  encrypt(){
    this.fileEncryption.decrypt('assets/json/topSecret.json', 'secretKey');
    
    this.fileEncryption.encrypt('assets/json/topSecret.json', 'secretKey');
  }
}
