import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexAppContentPage } from './index-app-content';

@NgModule({
  declarations: [
    IndexAppContentPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexAppContentPage),
  ],
})
export class IndexAppContentPageModule {}
