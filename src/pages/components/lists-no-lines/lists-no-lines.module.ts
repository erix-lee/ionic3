import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsNoLinesPage } from './lists-no-lines';

@NgModule({
  declarations: [
    ListsNoLinesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListsNoLinesPage),
  ],
})
export class ListsNoLinesPageModule {}
