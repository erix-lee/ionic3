import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentViewerPage } from './document-viewer';

@NgModule({
  declarations: [
    DocumentViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentViewerPage),
  ],
})
export class DocumentViewerPageModule {}
