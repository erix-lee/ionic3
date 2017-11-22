import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceAccountsPage } from './device-accounts';

@NgModule({
  declarations: [
    DeviceAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceAccountsPage),
  ],
})
export class DeviceAccountsPageModule {}
