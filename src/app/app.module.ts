import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ComponentsPage } from '../pages/components/components';
import { NativePage } from '../pages/native/native';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ComponentsPage,
    NativePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      cancelText: '取消',
      doneText: '确定',
      submitText: '提交',
      monthNames:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      monthShortNames:["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      dayNames: ["日", "一", "二", "三", "四", "五", "六"],
      dayShortNames:["日", "一", "二", "三", "四", "五", "六"],
      backButtonText: '后退',
      tabsPlacement: 'bottom'
    }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ComponentsPage,
    NativePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: ErrorHandler, useClass: IonicErrorHandler },

  ]
})
export class AppModule { }
