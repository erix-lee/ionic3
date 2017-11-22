import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Autostart } from '@ionic-native/autostart';
/**
 * Generated class for the AutostartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autostart',
  templateUrl: 'autostart.html',
})
export class AutostartPage {

  constructor(private autostart: Autostart) { }
  enable(){
    this.autostart.enable();
    
    
  }
  disable(){
    this.autostart.disable();
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AutostartPage');
  }

}
