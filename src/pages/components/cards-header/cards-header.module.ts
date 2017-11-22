import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsHeaderPage } from './cards-header';

@NgModule({
  declarations: [
    CardsHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsHeaderPage),
  ],
})
export class CardsHeaderPageModule {}
