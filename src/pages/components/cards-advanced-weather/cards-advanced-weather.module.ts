import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsAdvancedWeatherPage } from './cards-advanced-weather';

@NgModule({
  declarations: [
    CardsAdvancedWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsAdvancedWeatherPage),
  ],
})
export class CardsAdvancedWeatherPageModule {}
