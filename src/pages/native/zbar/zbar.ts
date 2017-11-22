import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ZBar, ZBarOptions } from '@ionic-native/zbar';
/**
 * Generated class for the ZbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zbar',
  templateUrl: 'zbar.html',
})
export class ZbarPage {

  constructor(private zbar: ZBar) { }
  sacn() {
    let options: ZBarOptions = {
      flash: 'off',
      drawSight: false
    };

    this.zbar.scan(options)
      .then(result => {
        console.log(result); // Scanned code
      })
      .catch(error => {
        console.log(error); // Error message
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ZbarPage');
  }

}
