import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,  PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popovers',
  templateUrl: 'popovers.html',
})
export class PopoversPage {

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(private popoverCtrl: PopoverController) {

  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create('PopoverContentPage', {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoversPage');
  }

}
