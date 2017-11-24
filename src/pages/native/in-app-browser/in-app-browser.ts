import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the InAppBrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-in-app-browser',
  templateUrl: 'in-app-browser.html',
})
export class InAppBrowserPage {

  constructor(private iab: InAppBrowser) { }
  create(){
    const browser = this.iab.create('https://ionicframework.com/');
    
   // browser.executeScript(...);
    //browser.insertCSS(...);
    browser.close();
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad InAppBrowserPage');
  }

}
