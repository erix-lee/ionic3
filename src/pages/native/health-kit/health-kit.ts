import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HealthKit } from '@ionic-native/health-kit';
/**
 * Generated class for the HealthKitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health-kit',
  templateUrl: 'health-kit.html',
})
export class HealthKitPage {

  constructor(private healthKit: HealthKit) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthKitPage');
  }

}
