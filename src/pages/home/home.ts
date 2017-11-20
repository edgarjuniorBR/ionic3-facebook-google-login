import { Component } from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private accessToken;
  private loginType;
  private user;
  constructor(public navCtrl: NavController, private fb: Facebook, public navParams: NavParams) {
    this.accessToken = this.navParams.get('token');
    this.loginType = this.navParams.get('login_type');
    this.getInfo();
  }
  logout() {

    if(this.loginType === 'Facebook') {
      this.fb.logout();
    } else {
      //GooglePlus.logout();
    }
    this.navCtrl.parent.parent.pop();
  }

  getInfo() {
    this.fb.api(`/me?fields=id,name,birthday,email,gender&access_token=${this.accessToken}`, [])
      .then((res) => {
        this.user = {
          authResponse: res.authResponse,
          userID: res.id,
          name: res.name,
          email: res.email,
          birthday: res.birthday,
          gender: res.gender,
          picture: "http://graph.facebook.com/" + res.id + "/picture?type=large"
        };
        console.log(this.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
