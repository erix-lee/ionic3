import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
/**
 * Generated class for the UniqueDeviceIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unique-device-id',
  templateUrl: 'unique-device-id.html',
})
export class UniqueDeviceIdPage {

  constructor(private uniqueDeviceID: UniqueDeviceID) { }
  get() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => console.log(uuid))
      .catch((error: any) => console.log(error));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UniqueDeviceIdPage');
  }

}
