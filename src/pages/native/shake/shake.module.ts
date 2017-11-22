import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShakePage } from './shake';

@NgModule({
  declarations: [
    ShakePage,
  ],
  imports: [
    IonicPageModule.forChild(ShakePage),
  ],
})
export class ShakePageModule {}
