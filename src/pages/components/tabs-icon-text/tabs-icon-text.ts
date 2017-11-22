import { Component } from '@angular/core';
import { IonicPage, Platform} from 'ionic-angular';

/**
 * Generated class for the TabsIconTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-icon-text',
  templateUrl: 'tabs-icon-text.html',
})
export class TabsIconTextPage {
  rootPage = 'TabContentPage';
  
    isAndroid: boolean = false;
  
    constructor(platform: Platform) {
      this.isAndroid = platform.is('android');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsIconTextPage');
  }

}
