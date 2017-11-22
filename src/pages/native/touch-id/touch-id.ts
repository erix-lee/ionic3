import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';

@IonicPage()
@Component({
  selector: 'page-touch-id',
  templateUrl: 'touch-id.html',
})
export class TouchIdPage {

  constructor(private touchId: TouchID) { }
  isAvailable() {
    this.touchId.isAvailable()
      .then(
      res => console.log('TouchID is available!'),
      err => console.error('TouchID is not available', err)
      );
  }
  verifyFingerprint() {
    this.touchId.verifyFingerprint('Scan your fingerprint please')
      .then(
      res => console.log('Ok', res),
      err => console.error('Error', err)
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TouchIdPage');
  }

}
