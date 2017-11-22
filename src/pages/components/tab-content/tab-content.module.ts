import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabContentPage } from './tab-content';

@NgModule({
  declarations: [
    TabContentPage,
  ],
  imports: [
    IonicPageModule.forChild(TabContentPage),
  ],
})
export class TabContentPageModule {}
