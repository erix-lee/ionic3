import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
/**
 * Generated class for the Base64ToGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-base64-to-gallery',
  templateUrl: 'base64-to-gallery.html',
})
export class Base64ToGalleryPage {

  constructor(private base64ToGallery: Base64ToGallery) { }
  baseGallery(){
    let base64Data="";
    this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Base64ToGalleryPage');
  }

}
