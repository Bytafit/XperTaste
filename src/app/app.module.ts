import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Recipes } from '../pages/recipes/recipes';
import { FoodSelection} from '../pages/foodselection/foodselection';
import { TabsPage } from '../pages/tabs/tabs';
import {ApplePie} from '../pages/applepie/applepie';
import {Taco} from '../pages/taco/taco';
import {Ravioli} from'../pages/ravioli/ravioli';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Recipes,
    TabsPage,
    FoodSelection,
    ApplePie,
    Taco,
    Ravioli
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Recipes,
    TabsPage,
    FoodSelection,
    ApplePie,
    Taco,
    Ravioli
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
