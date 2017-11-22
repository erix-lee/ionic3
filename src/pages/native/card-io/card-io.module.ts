import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardIoPage } from './card-io';

@NgModule({
  declarations: [
    CardIoPage,
  ],
  imports: [
    IonicPageModule.forChild(CardIoPage),
  ],
})
export class CardIoPageModule {}
