import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
/**
 * Generated class for the AppVersionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-version',
  templateUrl: 'app-version.html',
})
export class AppVersionPage {

  constructor(private appVersion: AppVersion) {




    this.appVersion.getAppName();
    this.appVersion.getPackageName();
    this.appVersion.getVersionCode();
    this.appVersion.getVersionNumber();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppVersionPage');
  }

}
