import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsHeadersPage } from './lists-headers';

@NgModule({
  declarations: [
    ListsHeadersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListsHeadersPage),
  ],
})
export class ListsHeadersPageModule {}
