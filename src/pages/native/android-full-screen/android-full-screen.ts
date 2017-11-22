import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';


@IonicPage()
@Component({
  selector: 'page-android-full-screen',
  templateUrl: 'android-full-screen.html',
})
export class AndroidFullScreenPage {
  error: any;

  constructor(private androidFullScreen: AndroidFullScreen) { }
  toggle(){
    this.androidFullScreen.isImmersiveModeSupported()
    .then(() => this.androidFullScreen.immersiveMode())
    .catch((error: any) => this.error=error);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AndroidFullScreenPage');
  }

}
