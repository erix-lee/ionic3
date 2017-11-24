import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocationPage } from './geolocation';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    GeolocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocationPage),
  ],
  providers:[
    Geolocation
  ]
})
export class GeolocationPageModule {}
