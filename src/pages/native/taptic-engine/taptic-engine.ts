import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TapticEngine } from '@ionic-native/taptic-engine';
/**
 * Generated class for the TapticEnginePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taptic-engine',
  templateUrl: 'taptic-engine.html',
})
export class TapticEnginePage {

  constructor(private taptic: TapticEngine) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapticEnginePage');
  }
  selection() {
    
    this.taptic.selection();
    //this.taptic.notification();
 
    //this.taptic.impact();
  }
}
