import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsThumbnailPage } from './lists-thumbnail';

@NgModule({
  declarations: [
    ListsThumbnailPage,
  ],
  imports: [
    IonicPageModule.forChild(ListsThumbnailPage),
  ],
})
export class ListsThumbnailPageModule {}
