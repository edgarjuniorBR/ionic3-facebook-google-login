import { Component } from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root;
  private auth: any;
  constructor(public navCtrl: NavController, private params: NavParams) {
    this.auth = params.data;
    this.tab1Root = HomePage;
  }
}
