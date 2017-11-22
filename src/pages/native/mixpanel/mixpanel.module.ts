import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MixpanelPage } from './mixpanel';

@NgModule({
  declarations: [
    MixpanelPage,
  ],
  imports: [
    IonicPageModule.forChild(MixpanelPage),
  ],
})
export class MixpanelPageModule {}
