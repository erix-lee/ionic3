import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
/**
 * Generated class for the BluetoothSerialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bluetooth-serial',
  templateUrl: 'bluetooth-serial.html',
})
export class BluetoothSerialPage {

  constructor(private bluetoothSerial: BluetoothSerial) { }
  write() {
    // Write a string
    this.bluetoothSerial.write('hello world').then((e) => console.log(e), (e) => console.log(e));

    // Array of int or bytes
    this.bluetoothSerial.write([186, 220, 222]).then((e) => console.log(e), (e) => console.log(e));

    // Typed Array
    var data = new Uint8Array(4);
    data[0] = 0x41;
    data[1] = 0x42;
    data[2] = 0x43;
    data[3] = 0x44;
    this.bluetoothSerial.write(data).then((e) => console.log(e), (e) => console.log(e));

    // Array Buffer
    this.bluetoothSerial.write(data.buffer).then((e) => console.log(e), (e) => console.log(e));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BluetoothSerialPage');
  }

}
