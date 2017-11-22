import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeGeocoderPage } from './native-geocoder';

@NgModule({
  declarations: [
    NativeGeocoderPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeGeocoderPage),
  ],
})
export class NativeGeocoderPageModule {}
