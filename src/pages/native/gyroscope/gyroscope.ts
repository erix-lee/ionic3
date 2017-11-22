import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
/**
 * Generated class for the GyroscopePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyroscope',
  templateUrl: 'gyroscope.html',
})
export class GyroscopePage {

  constructor(private gyroscope: Gyroscope) { }
  watch() {
    let options: GyroscopeOptions = {
      frequency: 1000
    };

    this.gyroscope.getCurrent(options)
      .then((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
      })
      .catch();


    this.gyroscope.watch()
      .subscribe((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GyroscopePage');
  }

}
