import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouchbaseLitePage } from './couchbase-lite';

@NgModule({
  declarations: [
    CouchbaseLitePage,
  ],
  imports: [
    IonicPageModule.forChild(CouchbaseLitePage),
  ],
})
export class CouchbaseLitePageModule {}
