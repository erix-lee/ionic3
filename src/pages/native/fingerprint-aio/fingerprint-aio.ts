import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
/**
 * Generated class for the FingerprintAioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint-aio',
  templateUrl: 'fingerprint-aio.html',
})
export class FingerprintAioPage {

  constructor(private faio: FingerprintAIO) { }
  show() {
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', //Only necessary for Android
      disableBackup: true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    })
      .then((result: any) => console.log(result))
      .catch((error: any) => console.log(error));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintAioPage');
  }

}
