import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsomniaPage } from './insomnia';

@NgModule({
  declarations: [
    InsomniaPage,
  ],
  imports: [
    IonicPageModule.forChild(InsomniaPage),
  ],
})
export class InsomniaPageModule {}
