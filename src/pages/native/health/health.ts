import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Health } from '@ionic-native/health';
/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  constructor(private health: Health) { }
  isAvailable(){
    this.health.isAvailable()
    .then((available:boolean) => {
      console.log(available);
      this.health.requestAuthorization([
        'distance', 'nutrition',  //read and write permissions
        {
          read: ['steps'],       //read only permission
          write: ['height', 'weight']  //write only permission
        }
      ])
      .then(res => console.log(res))
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }

}
