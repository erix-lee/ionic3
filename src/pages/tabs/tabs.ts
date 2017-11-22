import { Component } from '@angular/core';

import { ComponentsPage } from '../components/components';
import { NativePage } from '../native/native';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ComponentsPage;
  tab2Root = NativePage;
  tab3Root = HomePage;

  constructor() {

  }
}
