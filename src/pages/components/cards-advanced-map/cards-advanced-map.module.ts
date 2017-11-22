import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsAdvancedMapPage } from './cards-advanced-map';

@NgModule({
  declarations: [
    CardsAdvancedMapPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsAdvancedMapPage),
  ],
})
export class CardsAdvancedMapPageModule {}
