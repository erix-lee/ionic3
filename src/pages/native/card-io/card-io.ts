import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CardIO } from '@ionic-native/card-io';
/**
 * Generated class for the CardIoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-io',
  templateUrl: 'card-io.html',
})
export class CardIoPage {

  constructor(private cardIO: CardIO) { }
  canScan(){
    this.cardIO.canScan()
    .then(
      (res: boolean) => {
        if(res){
          let options = {
            requireExpiry: true,
            requireCVV: false,
            requirePostalCode: false
          };
          this.cardIO.scan(options);
        }
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardIoPage');
  }

}
