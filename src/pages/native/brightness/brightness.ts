import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';

/**
 * Generated class for the BrightnessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brightness',
  templateUrl: 'brightness.html',
})
export class BrightnessPage {

  constructor(private brightness: Brightness) { }
  setBrightness(){
    let brightnessValue: number = 0.8;
    this.brightness.setBrightness(brightnessValue);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BrightnessPage');
  }

}
