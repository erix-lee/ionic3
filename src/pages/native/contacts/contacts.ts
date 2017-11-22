import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor(private contacts: Contacts) { }
  save(){
    let contact: Contact = this.contacts.create();
    
    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
