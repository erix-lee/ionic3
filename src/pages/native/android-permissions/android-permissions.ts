import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
/**
 * Generated class for the AndroidPermissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-android-permissions',
  templateUrl: 'android-permissions.html',
})
export class AndroidPermissionsPage {

  constructor(private androidPermissions: AndroidPermissions) { }
  checkPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      success => console.log('Permission granted'),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
  }
  requestPermissions() {
    
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AndroidPermissionsPage');
  }

}
