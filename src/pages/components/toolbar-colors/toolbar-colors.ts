import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toolbar-colors',
  templateUrl: 'toolbar-colors.html',
})
export class ToolbarColorsPage {
  colors:Array<string>;
  color:string;
  constructor(public nav: NavController) {
    
    this.colors=['light',"secondary"];
    this.color=this.colors[0];
  }

  setColor(ncolor) {
    this.color=ncolor;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarColorsPage');
  }

}
