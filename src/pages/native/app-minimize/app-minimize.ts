import { Component } from '@angular/core';
import { IonicPage,Platform } from 'ionic-angular';

import { AppMinimize } from '@ionic-native/app-minimize';



@IonicPage()
@Component({
  selector: 'page-app-minimize',
  templateUrl: 'app-minimize.html',
})
export class AppMinimizePage {

  constructor(private platform: Platform, private appMinimize: AppMinimize) { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppMinimizePage');
  }
  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      this.appMinimize.minimize();
    });
  }
}
