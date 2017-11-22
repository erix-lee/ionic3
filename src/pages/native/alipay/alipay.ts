import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Alipay, AlipayOrder } from '@ionic-native/alipay';

@IonicPage()
@Component({
  selector: 'page-alipay',
  templateUrl: 'alipay.html',
})
export class AlipayPage {

  constructor(private alipay: Alipay) {


  }
  pay() {
    const alipayOrder: AlipayOrder = {
      "app_id": "app_id",
      "method": 'alipay.trade.app.pay',
      "format": 'json',
      "charset": 'UTF-8',
      "sign_type": 'RSA',
      "timestamp": "Y-m-d H:i:s",
      "version": '1.0',
      "notify_url": "url",
      "biz_content": "",

      "sign": ""

    };


    this.alipay.pay(alipayOrder)
      .then(result => {
        console.log(result); // Success
      })
      .catch(error => {
        console.log(error); // Failed
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlipayPage');
  }

}
