import { Component ,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;

  items: Array<{ title: string, page: any }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.items = [
      {
        title: 'action-sheets',
        page: 'ActionSheetsPage'
      },
      {
        title: 'alerts',
        page: 'AlertsPage'
      },
      {
        title: 'alerts-checkbox',
        page: 'AlertsCheckboxPage'
      }]
  }
  itemTapped(event, item) {
    this.nav.push(item.page);
  }
}
