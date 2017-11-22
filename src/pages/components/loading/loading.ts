import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public loadingCtrl: LoadingController) { }
  
    presentLoading() {
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

}
