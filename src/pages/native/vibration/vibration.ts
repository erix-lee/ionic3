import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(private vibration: Vibration) { }
  vibrate() {
    // Vibrate the device for a second
    // Duration is ignored on iOS.
    this.vibration.vibrate(1000);
  }
  vibrate2() {
    // Vibrate 2 seconds
    // Pause for 1 second
    // Vibrate for 2 seconds
    // Patterns work on Android and Windows only
    this.vibration.vibrate([2000, 1000, 2000]);
  }
  vibrate3() {
    // Stop any current vibrations immediately
    // Works on Android and Windows only
    this.vibration.vibrate(0);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

}
