import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsSlidingPage } from './lists-sliding';

@NgModule({
  declarations: [
    ListsSlidingPage,
  ],
  imports: [
    IonicPageModule.forChild(ListsSlidingPage),
  ],
})
export class ListsSlidingPageModule {}
