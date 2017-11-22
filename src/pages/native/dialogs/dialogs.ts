import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
/**
 * Generated class for the DialogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dialogs',
  templateUrl: 'dialogs.html',
})
export class DialogsPage {

  constructor(private dialogs: Dialogs) {
    this.dialogs.alert('Hello world')
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DialogsPage');
  }

}
