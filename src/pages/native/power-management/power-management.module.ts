import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PowerManagementPage } from './power-management';

@NgModule({
  declarations: [
    PowerManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(PowerManagementPage),
  ],
})
export class PowerManagementPageModule {}
