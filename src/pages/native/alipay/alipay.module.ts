import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlipayPage } from './alipay';

@NgModule({
  declarations: [
    AlipayPage,
  ],
  imports: [
    IonicPageModule.forChild(AlipayPage),
  ],
})
export class AlipayPageModule {}
