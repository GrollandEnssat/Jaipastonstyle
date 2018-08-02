import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SwingModule} from 'angular2-swing';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// import services
import {UserService} from '../services/user-service';
import {ChatService} from '../services/chat-service';
import {PostService} from '../services/post-service';
import {DateService} from '../services/date-service';
import {NotificationService} from '../services/notification-service';
import {ProfileService} from '../services/profile-service';
// end import services

// import pages
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {NearbyPage} from '../pages/nearby/nearby';
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {MatchPage} from '../pages/match/match';
import {MessagesPage} from '../pages/messages/messages';
import {MeetPage} from '../pages/meet/meet';
import {WallPage} from '../pages/wall/wall';
import {FilterPage} from '../pages/filter/filter';
import {NotificationsPage} from '../pages/notifications/notifications';
import {UserDetailPage} from '../pages/user-detail/user-detail';
import {ChatDetailPage} from '../pages/chat-detail/chat-detail';
import {PostPage} from '../pages/post/post';
import {DatePage} from '../pages/date/date';
import {ContactsPage} from '../pages/contacts/contacts';
import {SettingPage} from '../pages/setting/setting';
import {SignInPage} from '../pages/sign-in/sign-in';
import {ProfilePage} from '../pages/profile/profile'
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';

// end import pages

@NgModule({
  declarations: [
    MyApp,
    MainTabsPage,
    NearbyPage,
    WelcomePage,
    LoginPage,
    MatchPage,
    MessagesPage,
    MeetPage,
    WallPage,
    FilterPage,
    NotificationsPage,
    UserDetailPage,
    ChatDetailPage,
    PostPage,
    DatePage,
    ContactsPage,
    SettingPage,
    SignInPage,
    ProfilePage,

    /* import pages */
  ],
  imports: [
    HttpClientModule,
       TranslateModule.forRoot({
           loader: {
               provide: TranslateLoader,
               useFactory: HttpLoaderFactory,
               deps: [HttpClient]
           }
       }),
    IonicModule.forRoot(MyApp, {
          platforms: {
            /*android: {
              tabsPlacement: 'bottom',
              tabsLayout: 'title-hide',
              color: 'primary'
            },*/
            windows: {
              tabsLayout: 'title-hide'
            }
          }
        }
    ),
    BrowserModule, SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainTabsPage,
    NearbyPage,
    WelcomePage,
    LoginPage,
    MatchPage,
    MessagesPage,
    MeetPage,
    WallPage,
    FilterPage,
    NotificationsPage,
    UserDetailPage,
    ChatDetailPage,
    PostPage,
    DatePage,
    ContactsPage,
    SettingPage,
    SignInPage,
    ProfilePage,
    /* import pages */
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    ChatService,
    PostService,
    DateService,
    NotificationService,
    ProfileService,
    ProfileServiceProvider,
    /* import services */
  ]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
