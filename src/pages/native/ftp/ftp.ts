import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FTP } from '@ionic-native/ftp';
/**
 * Generated class for the FtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ftp',
  templateUrl: 'ftp.html',
})
export class FtpPage {

  constructor(private fTP: FTP) { }
  connect(){
    this.fTP.connect('ftp_host', 'ftp_user', 'ftp_password')
    .then((res: any) => console.log('Login successful', res))
    .catch((error: any) => console.error(error));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FtpPage');
  }

}
