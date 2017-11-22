import { Component } from '@angular/core';
import { IonicPage, AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertsConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerts-confirm',
  templateUrl: 'alerts-confirm.html',
})
export class AlertsConfirmPage {

 
  constructor(public alerCtrl: AlertController) { }
  
    doConfirm() {
      let confirm = this.alerCtrl.create({
        title: 'Use this lightsaber?',
        message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present()
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsConfirmPage');
  }

}
