import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsInsetPage } from './lists-inset';

@NgModule({
  declarations: [
    ListsInsetPage,
  ],
  imports: [
    IonicPageModule.forChild(ListsInsetPage),
  ],
})
export class ListsInsetPageModule {}
