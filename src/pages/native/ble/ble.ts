import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
/**
 * Generated class for the BlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ble',
  templateUrl: 'ble.html',
})
export class BlePage {

  constructor(private ble: BLE) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlePage');
  }

}
