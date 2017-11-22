import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlipayPage } from './alipay';
import { Alipay } from '@ionic-native/alipay';
@NgModule({
  declarations: [
    AlipayPage,
  ],
  imports: [
    IonicPageModule.forChild(AlipayPage),
  ],
  providers:[
    Alipay
  ]
})
export class AlipayPageModule {}
