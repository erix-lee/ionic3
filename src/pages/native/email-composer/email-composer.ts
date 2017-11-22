import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the EmailComposerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email-composer',
  templateUrl: 'email-composer.html',
})
export class EmailComposerPage {

  constructor(private emailComposer: EmailComposer) { }
  open(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'max@mustermann.de',
       cc: 'erika@mustermann.de',
       bcc: ['john@doe.com', 'jane@doe.com'],
       attachments: [
         'file://img/logo.png',
         'res://icon.png',
         'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
         'file://README.pdf'
       ],
       subject: 'Cordova Icons',
       body: 'How are you? Nice greetings from Leipzig',
       isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailComposerPage');
  }

}
