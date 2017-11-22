import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  constructor(private barcodeScanner: BarcodeScanner) { }
  scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
     }, (err) => {
         // An error occurred
     });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

}
