import { Component } from '@angular/core';
import { IonicPage, AlertController} from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
/**
 * Generated class for the InputsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {

  form;
  
    constructor(public alertCtrl: AlertController) {
      this.form = new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required)
      });
    }
  
    processForm() {
      let alert = this.alertCtrl.create({
        title: "Account Created",
        message: "Created Account for: " + this.form.value.firstName + " " + this.form.value.lastName,
        buttons: [{
          text: 'Ok',
        }]
      });
  
      if (this.form.status === 'VALID') {
        alert.present()
      }
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

}
