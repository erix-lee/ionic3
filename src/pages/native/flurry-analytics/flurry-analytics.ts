import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-flurry-analytics',
  templateUrl: 'flurry-analytics.html',
})
export class FlurryAnalyticsPage {

  constructor() { }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FlurryAnalyticsPage');
  }

}
