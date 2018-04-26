import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HouseTrainingPage } from '../pages/house-training/house-training';
import { CaringPage } from '../pages/caring/caring';
import { FeedingPage } from '../pages/feeding/feeding';
import { HealthPage } from '../pages/health/health';
import { MyCatsPage } from '../pages/my-cats/my-cats';
import { SpecialPage } from '../pages/special/special';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CaringPage,
    HouseTrainingPage,
    FeedingPage,
    HealthPage,
    MyCatsPage,
    SpecialPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CaringPage,
    HouseTrainingPage,
    FeedingPage,
    HealthPage,
    MyCatsPage,
    SpecialPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
