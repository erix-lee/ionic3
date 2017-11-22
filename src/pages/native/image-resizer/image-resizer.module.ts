import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageResizerPage } from './image-resizer';

@NgModule({
  declarations: [
    ImageResizerPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageResizerPage),
  ],
})
export class ImageResizerPageModule {}
