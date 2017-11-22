import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DeviceAccounts } from '@ionic-native/device-accounts';

/**
 * Generated class for the DeviceAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-accounts',
  templateUrl: 'device-accounts.html',
})
export class DeviceAccountsPage {

  constructor(private deviceAccounts: DeviceAccounts) {
    this.deviceAccounts.get()
    .then(accounts => console.log(accounts))
    .catch(error => console.error(error));
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceAccountsPage');
  }

}
