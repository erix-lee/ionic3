import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DbMeterPage } from './db-meter';

@NgModule({
  declarations: [
    DbMeterPage,
  ],
  imports: [
    IonicPageModule.forChild(DbMeterPage),
  ],
})
export class DbMeterPageModule {}
