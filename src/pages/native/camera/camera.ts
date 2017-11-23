import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  base64Image: string;
  url:string;
  options: CameraOptions ;
  constructor(private camera: Camera) { 
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }
  
  getCamera(){
    this.options.destinationType=this.camera.DestinationType.DATA_URL;
    this.options.mediaType=this.camera.MediaType.PICTURE;
    this.options.sourceType=this.camera.PictureSourceType.CAMERA;
    this.camera.getPicture(this.options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  getPhotoLib(){
    this.options.destinationType=this.camera.DestinationType.DATA_URL;
    this.options.mediaType=this.camera.MediaType.PICTURE;
    this.options.sourceType=this.camera.PictureSourceType.PHOTOLIBRARY;
    
    this.camera.getPicture(this.options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  getVideo(){
    this.options.destinationType=this.camera.DestinationType.FILE_URI;
    this.options.mediaType=this.camera.MediaType.VIDEO;
    this.options.sourceType=this.camera.PictureSourceType.CAMERA;
    
    this.camera.getPicture(this.options).then((url) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.url = url;
    }, (err) => {
     // Handle error
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
