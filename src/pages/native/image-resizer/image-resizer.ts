import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';
/**
 * Generated class for the ImageResizerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-resizer',
  templateUrl: 'image-resizer.html',
})
export class ImageResizerPage {

  constructor(private imageResizer: ImageResizer) { 
    let options = {
      uri: "",
      folderName: 'Protonet',
      quality: 90,
      width: 1280,
      height: 1280
     } as ImageResizerOptions;
     
     this.imageResizer
       .resize(options)
       .then((filePath: string) => console.log('FilePath', filePath))
       .catch(e => console.log(e));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageResizerPage');
  }

}
