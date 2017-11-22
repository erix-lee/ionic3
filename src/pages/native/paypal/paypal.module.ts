import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaypalPage } from './paypal';

@NgModule({
  declarations: [
    PaypalPage,
  ],
  imports: [
    IonicPageModule.forChild(PaypalPage),
  ],
})
export class PaypalPageModule {}
