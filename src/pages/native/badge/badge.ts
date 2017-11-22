import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';

/**
 * Generated class for the BadgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badge',
  templateUrl: 'badge.html',
})
export class BadgePage {

  constructor(private badge: Badge) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgePage');
  }

  setBadge(){
    this.badge.set(10);
    this.badge.increase(1);
    this.badge.clear();
  }
}
