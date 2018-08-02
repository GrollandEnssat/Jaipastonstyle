import {Component} from '@angular/core';
import {NavController, Platform, MenuController} from 'ionic-angular';
import {NearbyPage} from "../nearby/nearby";
import {MatchPage} from "../match/match";
import {MessagesPage} from "../messages/messages";
import {MeetPage} from "../meet/meet";
import {ProfilePage} from "../profile/profile";
import {ContactsPage} from "../contacts/contacts";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html',
})
export class MainTabsPage {
  // tabs
  public nearby: any;
  public match: any;
  public messages: any;
  public contacts: any;
  public profile: any;

  // tab color
  public tabColor = 'primary';

  constructor(public nav: NavController, public platform: Platform, public menu: MenuController) {
    // set component for tabs
    this.nearby = NearbyPage;
    this.match = MatchPage;
    this.messages = MessagesPage;
    this.contacts = ContactsPage;
    this.profile = ProfilePage;

    // disable menu
    this.menu.swipeEnable(false);

    // detect platform for tabs color
    if (platform.is('ios')) {
      this.tabColor = '';
    }
  }
}
