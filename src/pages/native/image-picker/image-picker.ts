import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
/**
 * Generated class for the ImagePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-picker',
  templateUrl: 'image-picker.html',
})
export class ImagePickerPage {

  constructor(private imagePicker: ImagePicker) {
    let options = {
      // max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 15,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 800,
      height: 600,

      // quality of resized image, defaults to 100(0-100)
      quality: 80
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePickerPage');
  }

}
