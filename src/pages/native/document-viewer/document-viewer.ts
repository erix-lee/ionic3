import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';
/**
 * Generated class for the DocumentViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-viewer',
  templateUrl: 'document-viewer.html',
})
export class DocumentViewerPage {

  constructor(private document: DocumentViewer) { }
  viewDocument(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    
    this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentViewerPage');
  }

}
