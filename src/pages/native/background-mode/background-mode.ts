import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
/**
 * Generated class for the BackgroundModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-background-mode',
  templateUrl: 'background-mode.html',
})
export class BackgroundModePage {

  constructor(private backgroundMode: BackgroundMode) { }
  enable(){
    this.backgroundMode.enable();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BackgroundModePage');
  }

}
