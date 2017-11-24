import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {

  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {


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
    this.navCtrl.push(item.page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenusPage');
  }

}
