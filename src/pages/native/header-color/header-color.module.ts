import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderColorPage } from './header-color';

@NgModule({
  declarations: [
    HeaderColorPage,
  ],
  imports: [
    IonicPageModule.forChild(HeaderColorPage),
  ],
})
export class HeaderColorPageModule {}
