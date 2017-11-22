import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Device } from '@ionic-native/device';
/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  constructor(private device: Device) { console.log('Device UUID is: ' + this.device.uuid); }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

}
