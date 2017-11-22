import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the CallNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-number',
  templateUrl: 'call-number.html',
})
export class CallNumberPage {

  constructor(private callNumber: CallNumber) { }
  call(){
    this.callNumber.callNumber("18001010101", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CallNumberPage');
  }

}
