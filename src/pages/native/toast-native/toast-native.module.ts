import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToastNativePage } from './toast-native';

@NgModule({
  declarations: [
    ToastNativePage,
  ],
  imports: [
    IonicPageModule.forChild(ToastNativePage),
  ],
})
export class ToastNativePageModule {}
