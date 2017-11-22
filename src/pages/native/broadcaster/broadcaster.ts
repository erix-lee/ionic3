import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Broadcaster } from '@ionic-native/broadcaster';
/**
 * Generated class for the BroadcasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-broadcaster',
  templateUrl: 'broadcaster.html',
})
export class BroadcasterPage {

  constructor(private broadcaster: Broadcaster) { }
  subscribe() {

    // Listen to events from Native
    this.broadcaster.addEventListener('eventName').subscribe((event) => console.log(event));

    // Send event to Native
    this.broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BroadcasterPage');
  }

}
