import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUpdate } from '@ionic-native/app-update';
/**
  <update>
    <version>302048</version>
    <name>APK Name</name>
    <url>https://your-remote-api.com/YourApp.apk</url>
</update>
 */

@IonicPage()
@Component({
  selector: 'page-app-update',
  templateUrl: 'app-update.html',
})
export class AppUpdatePage {
  updateUrl: string;

  constructor(private appUpdate: AppUpdate) {


  }
  check() {

    this.updateUrl = 'http://192.168.1.115/update.xml';
    this.appUpdate.checkAppUpdate(this.updateUrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppUpdatePage');
  }

}
