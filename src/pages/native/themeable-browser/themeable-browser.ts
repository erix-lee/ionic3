import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
/**
 * Generated class for the ThemeableBrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-themeable-browser',
  templateUrl: 'themeable-browser.html',
})
export class ThemeableBrowserPage {

  constructor(private themeableBrowser: ThemeableBrowser) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemeableBrowserPage');
  }
  press() {
    // can add options from the original InAppBrowser in a JavaScript object form (not string)
    // This options object also takes additional parameters introduced by the ThemeableBrowser plugin
    // This example only shows the additional parameters for ThemeableBrowser
    // Note that that `image` and `imagePressed` values refer to resources that are stored in your app
    const options: ThemeableBrowserOptions = {
      statusbar: {
        color: '#ffffffff'
      },
      toolbar: {
        height: 44,
        color: '#f0f0f0ff'
      },
      title: {
        color: '#003264ff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      forwardButton: {
        image: 'forward',
        imagePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
      },
      closeButton: {
        image: 'close',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
      },
      customButtons: [
        {
          image: 'share',
          imagePressed: 'share_pressed',
          align: 'right',
          event: 'sharePressed'
        }
      ],
      menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
          {
            event: 'helloPressed',
            label: 'Hello World!'
          },
          {
            event: 'testPressed',
            label: 'Test!'
          }
        ]
      },
      backButtonCanClose: true
    };

    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://ionic.io', '_blank', options);
  }
}
