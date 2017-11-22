import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Base64ToGalleryPage } from './base64-to-gallery';

@NgModule({
  declarations: [
    Base64ToGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(Base64ToGalleryPage),
  ],
})
export class Base64ToGalleryPageModule {}
