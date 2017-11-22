import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AndroidPermissionsPage } from './android-permissions';

@NgModule({
  declarations: [
    AndroidPermissionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AndroidPermissionsPage),
  ],
})
export class AndroidPermissionsPageModule {}
