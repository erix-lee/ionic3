import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DeviceFeedback } from '@ionic-native/device-feedback';
/**
 * Generated class for the DeviceFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-feedback',
  templateUrl: 'device-feedback.html',
})
export class DeviceFeedbackPage {

  constructor(private deviceFeedback: DeviceFeedback) {
    this.deviceFeedback.acoustic();
    
    this.deviceFeedback.haptic(0);
    
    this.deviceFeedback.isFeedbackEnabled()
      .then((feedback) => {
        console.log(feedback);
        // {
        //   acoustic: true,
        //   haptic: true
        // }
      });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceFeedbackPage');
  }

}
