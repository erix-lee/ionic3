import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
/**
 * Generated class for the DeviceOrientationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-orientation',
  templateUrl: 'device-orientation.html',
})
export class DeviceOrientationPage {

  constructor(private deviceOrientation: DeviceOrientation) { }
  getCurrentHeading(){
    // Get the device current compass heading
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => console.log(data),
      (error: any) => console.log(error)
    );
    
    // Watch the device compass heading change
    var subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => console.log(data)
    );
    
    // Stop watching heading change
    subscription.unsubscribe();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceOrientationPage');
  }

}
