import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(private calendar: Calendar) { }
  createCalendar(){
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
