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
import { ProfilComponent } from './profil/profil.component'

@NgModule({
  declarations: [
    AppComponent,
    EnterNameDirective,
    DasBordComponent,
    BtnChangeColorDirective,
    HearderAppComponent,
    ProfilComponent
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
