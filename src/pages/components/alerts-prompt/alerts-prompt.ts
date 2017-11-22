import { Component } from '@angular/core';
import { IonicPage, AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertsPromptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerts-prompt',
  templateUrl: 'alerts-prompt.html',
})
export class AlertsPromptPage {

  
  constructor(public alertCtrl: AlertController) { }
  
    doPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title'
          },
          {
            name: 'some',
            placeholder: 'Some',
            type:'password'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked');
              console.log(data);
            }
          }
        ]
      });
      prompt.present();
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPromptPage');
  }

}
