import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QqsdkPage } from './qqsdk';

@NgModule({
  declarations: [
    QqsdkPage,
  ],
  imports: [
    IonicPageModule.forChild(QqsdkPage),
  ],
})
export class QqsdkPageModule {}
