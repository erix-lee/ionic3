import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppPurchasePage } from './in-app-purchase';

@NgModule({
  declarations: [
    InAppPurchasePage,
  ],
  imports: [
    IonicPageModule.forChild(InAppPurchasePage),
  ],
})
export class InAppPurchasePageModule {}
