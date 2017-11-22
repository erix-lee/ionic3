import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';
/**
 * Generated class for the DbMeterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-db-meter',
  templateUrl: 'db-meter.html',
})
export class DbMeterPage {

  constructor(private dbMeter: DBMeter) { }
  subscribe() {
    // Start listening
    let subscription = this.dbMeter.start().subscribe(
      data => console.log(data)
    );

    // Check if we are listening
    this.dbMeter.isListening().then(
      (isListening: boolean) => console.log(isListening)
    );

    // Stop listening
    subscription.unsubscribe();

    // Delete DBMeter instance from memory
    this.dbMeter.delete().then(
      () => console.log('Deleted DB Meter instance'),
      error => console.log('Error occurred while deleting DB Meter instance')
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DbMeterPage');
  }

}
