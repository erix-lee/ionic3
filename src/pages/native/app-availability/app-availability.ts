import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';


@IonicPage()
@Component({
  selector: 'page-app-availability',
  templateUrl: 'app-availability.html',
})
export class AppAvailabilityPage {

  constructor(private appAvailability: AppAvailability, private platform: Platform) { }
  check() {
    let app;

    if (this.platform.is('ios')) {
      app = 'mqq://';
    } else if (this.platform.is('android')) {
      app = 'com.tencent.mobileqq';
    }

    this.appAvailability.check(app)
      .then(
      (yes) => console.log(app + ' is available'),
      (no) => console.log(app + ' is NOT available')
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppAvailabilityPage');
  }

}
