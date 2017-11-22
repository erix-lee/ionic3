import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the DatePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-picker',
  templateUrl: 'date-picker.html',
})
export class DatePickerPage {

  constructor(private datePicker: DatePicker) { }
  show(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePickerPage');
  }

}
