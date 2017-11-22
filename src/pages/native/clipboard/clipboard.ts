import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
/**
 * Generated class for the ClipboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clipboard',
  templateUrl: 'clipboard.html',
})
export class ClipboardPage {

  constructor(private clipboard: Clipboard) { }
  copy(){
    this.clipboard.copy('Hello world');
    
    this.clipboard.paste().then(
       (resolve: string) => {
          alert(resolve);
        },
        (reject: string) => {
          alert('Error: ' + reject);
        }
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClipboardPage');
  }

}
