import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';


@IonicPage()
@Component({
  selector: 'page-android-fingerprint-auth',
  templateUrl: 'android-fingerprint-auth.html',
})
export class AndroidFingerprintAuthPage {

  constructor(private androidFingerprintAuth: AndroidFingerprintAuth) { }
  isAvailable() {
    this.androidFingerprintAuth.isAvailable()
      .then((result) => {
        if (result.isAvailable) {
          // it is available

          this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
            .then(result => {
              if (result.withFingerprint) {
                console.log('Successfully encrypted credentials.');
                console.log('Encrypted credentials: ' + result.token);
              } else if (result.withBackup) {
                console.log('Successfully authenticated with backup password!');
              } else console.log('Didn\'t authenticate!');
            })
            .catch(error => {
              if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                console.log('Fingerprint authentication cancelled');
              } else console.error(error)
            });

        } else {
          // fingerprint auth isn't available
        }
      })
      .catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AndroidFingerprintAuthPage');
  }

}
