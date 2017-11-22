import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqlitePorterPage } from './sqlite-porter';

@NgModule({
  declarations: [
    SqlitePorterPage,
  ],
  imports: [
    IonicPageModule.forChild(SqlitePorterPage),
  ],
})
export class SqlitePorterPageModule {}
