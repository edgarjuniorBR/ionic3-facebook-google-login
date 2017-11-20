import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
//import { GooglePlus } from 'ionic-native';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  ionViewDidLoad() {
    
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => { 
      console.log('Logged into Facebook!', res);
      this.navCtrl.push(TabsPage, 
        {
          'login_type' : 'Facebook',
          'token': res.authResponse.accessToken
        }
      )
    })
    .catch(e => console.log('Error logging into Facebook', e));    

  }

  loginGoogle() {/*
    GooglePlus.login({
      'webClientId': '17552311044-mji58tjn49vmi4k3ig4hr5cobaevuj14.apps.googleusercontent.com'
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });/*    
    this.navCtrl.push(TabsPage, 
      {
        'login_type' : 'Google',
        'token': 'res.authResponse.accessToken'
      }
    );*/
  }

}
