import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
/**
 * Generated class for the DeviceMotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html',
})
export class DeviceMotionPage {

  constructor(private deviceMotion: DeviceMotion) { }
  getCurrentAcceleration() {
    // Get the device current acceleration
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
      (error: any) => console.log(error)
    );
  }
  watchAcceleration() {
    // Watch device acceleration
    var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
    });

    // Stop watch
    subscription.unsubscribe();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMotionPage');
  }

}
