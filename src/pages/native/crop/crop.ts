import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Crop } from '@ionic-native/crop';
/**
 * Generated class for the CropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crop',
  templateUrl: 'crop.html',
})
export class CropPage {

  constructor(private crop: Crop) { }
  cropImage(){
    this.crop.crop('path/to/image.jpg', {quality: 75})
    .then(
      newImage => console.log('new image path is: ' + newImage),
      error => console.error('Error cropping image', error)
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CropPage');
  }

}
