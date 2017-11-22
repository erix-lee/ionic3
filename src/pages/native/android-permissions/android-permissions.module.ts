import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AndroidPermissionsPage } from './android-permissions';
import { AndroidPermissions } from '@ionic-native/android-permissions';
@NgModule({
  declarations: [
    AndroidPermissionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AndroidPermissionsPage),
  ],
  providers:[AndroidPermissions]
})
export class AndroidPermissionsPageModule {}
