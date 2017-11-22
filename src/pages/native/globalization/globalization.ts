import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Globalization } from '@ionic-native/globalization';
/**
 * Generated class for the GlobalizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-globalization',
  templateUrl: 'globalization.html',
})
export class GlobalizationPage {

  constructor(private globalization: Globalization) { 
    this.globalization.getPreferredLanguage()
    .then(res => console.log(res))
    .catch(e => console.log(e));
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalizationPage');
  }

}
