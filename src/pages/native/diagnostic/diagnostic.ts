import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
/**
 * Generated class for the DiagnosticPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diagnostic',
  templateUrl: 'diagnostic.html',
})
export class DiagnosticPage {

  constructor(private diagnostic: Diagnostic) {
    let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
    let errorCallback = (e) => console.error(e);

    this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);

    this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);


    this.diagnostic.getBluetoothState()
      .then((state) => {
        if (state == this.diagnostic.bluetoothState.POWERED_ON) {
          // do something
        } else {
          // do something else
        }
      }).catch(e => console.error(e));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticPage');
  }

}
