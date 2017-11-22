import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';
/**
 * Generated class for the AppRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-rate',
  templateUrl: 'app-rate.html',
})
export class AppRatePage {

  constructor(private appRate: AppRate) { }
  storeAppURL() {
    this.appRate.preferences.storeAppURL = {
      ios: '<app_id>',
      android: 'market://details?id=<package_name>',
      windows: 'ms-windows-store://review/?ProductId=<store_id>'
    };

    this.appRate.promptForRating(true);
  }
  preferences() {
    this.appRate.preferences = {
      usesUntilPrompt: 3,
      storeAppURL: {
        ios: '<app_id>',
        android: 'market://details?id=<package_name>',
        windows: 'ms-windows-store://review/?ProductId=<store_id>'
      }
    };

    this.appRate.promptForRating(false);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppRatePage');
  }

}
