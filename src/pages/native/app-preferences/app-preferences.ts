import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
 

@IonicPage()
@Component({
  selector: 'page-app-preferences',
  templateUrl: 'app-preferences.html',
})
export class AppPreferencesPage {

  constructor(private appPreferences: AppPreferences) { }
  fetch(){
    this.appPreferences.fetch('key').then((res) => { console.log(res); });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppPreferencesPage');
  }

}
