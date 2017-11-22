import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
/**
 * Generated class for the BrowserTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browser-tab',
  templateUrl: 'browser-tab.html',
})
export class BrowserTabPage {

  constructor(private browserTab: BrowserTab) {
    
      browserTab.isAvailable()
        .then((isAvailable: boolean) => {
    
          if (isAvailable) {
    
            browserTab.openUrl('https://ionic.io');
    
          } else {
    
            // open URL with InAppBrowser instead or SafariViewController
    
          }
    
        });
    
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserTabPage');
  }

}
