import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {MainTabsPage} from "../main-tabs/main-tabs";
import {LoginPage} from "../login/login";
import{SignInPage} from "../sign-in/sign-in"


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public nav: NavController, public menu: MenuController) {
    // disable menu
    this.menu.swipeEnable(false);
  }
  // go to home page
  goToHome() {
    this.nav.setRoot(MainTabsPage);
  }

  goToSignIn(){
    this.nav.push(SignInPage);
  }

  // go to login page
  goToLogin() {
    this.nav.push(LoginPage);
  }
}
