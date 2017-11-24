import { Component } from '@angular/core';
import {IonicPage, ModalController } from 'ionic-angular';

/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  constructor(public modalCtrl: ModalController) { }
  
    openModal(characterNum) {
  
      let modal = this.modalCtrl.create('ModalContentPage', characterNum);
      modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsPage');
  }

}
