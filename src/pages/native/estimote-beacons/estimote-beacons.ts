import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { EstimoteBeacons } from '@ionic-native/estimote-beacons';
/**
 * Generated class for the EstimoteBeaconsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estimote-beacons',
  templateUrl: 'estimote-beacons.html',
})
export class EstimoteBeaconsPage {

  constructor(private eb: EstimoteBeacons) {this.eb.requestAlwaysAuthorization();
    
    this.eb.enableAnalytics(true); }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimoteBeaconsPage');
  }

}
