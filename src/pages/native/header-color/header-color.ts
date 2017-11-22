import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HeaderColor } from '@ionic-native/header-color';
/**
 * Generated class for the HeaderColorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-header-color',
  templateUrl: 'header-color.html',
})
export class HeaderColorPage {

  constructor(private headerColor: HeaderColor) {
    this.headerColor.tint('#becb29');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderColorPage');
  }

}
