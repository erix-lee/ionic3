import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';
/**
 * Generated class for the BatteryStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battery-status',
  templateUrl: 'battery-status.html',
})
export class BatteryStatusPage {

  constructor(private batteryStatus: BatteryStatus) { }
  subscribe() {
    let subscription = this.batteryStatus.onChange().subscribe(
      (status: BatteryStatusResponse) => {
        console.log(status.level, status.isPlugged);
      }
    );

    // stop watch
    subscription.unsubscribe();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryStatusPage');
  }

}
