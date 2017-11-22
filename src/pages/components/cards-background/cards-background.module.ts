import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsBackgroundPage } from './cards-background';

@NgModule({
  declarations: [
    CardsBackgroundPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsBackgroundPage),
  ],
})
export class CardsBackgroundPageModule {}
