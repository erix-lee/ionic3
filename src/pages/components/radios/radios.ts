import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the RadiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radios',
  templateUrl: 'radios.html',
})
export class RadiosPage {

  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({ value: 'rust', disabled: false })
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RadiosPage');
  }

}
