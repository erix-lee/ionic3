import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast-native',
  templateUrl: 'toast-native.html',
})
export class ToastNativePage {

  constructor(private toast: Toast) { }
  show() {
    this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

}
