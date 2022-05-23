import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnterNameDirective } from './enter-name.directive';
import {HttpClientModule} from '@angular/common/http';
import { DasBordComponent } from './das-bord/das-bord.component';
import { BtnChangeColorDirective } from './btn-change-color.directive';
import { HearderAppComponent } from './hearder-app/hearder-app.component';
//import { AboutMe } from './about-me.component/about-me.component.component';
import { AboutMeComponent } from './about-me/about-me.component'

@NgModule({
  declarations: [
    AppComponent,
    EnterNameDirective,
    DasBordComponent,
    BtnChangeColorDirective,
    HearderAppComponent,
    //AboutMe.ComponentComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
