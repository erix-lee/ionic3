import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Uid } from '@ionic-native/uid';
//import { AndroidPermissions } from '@ionic-native/android-permissions';
/**
 * Generated class for the UidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uid',
  templateUrl: 'uid.html',
})
export class UidPage {
/*
  constructor(private uid: Uid, private androidPermissions: AndroidPermissions) { }
  async getImei() {
    const { hasPermission } = await this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    );
   
    if (!hasPermission) {
      const result = await this.androidPermissions.requestPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      );
   
      if (!result.hasPermission) {
        throw new Error('Permissions required');
      }
   
      // ok, a user gave us permission, we can get him identifiers after restart app
      return;
    }
   
     return this.uid.IMEI
   }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad UidPage');
  }

}
