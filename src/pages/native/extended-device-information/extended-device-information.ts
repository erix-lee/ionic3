import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';
/**
 * Generated class for the ExtendedDeviceInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extended-device-information',
  templateUrl: 'extended-device-information.html',
})
export class ExtendedDeviceInformationPage {

  constructor(private extendedDeviceInformation: ExtendedDeviceInformation) { console.log('The Memory is: ' + this.extendedDeviceInformation.memory); }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtendedDeviceInformationPage');
  }

}
