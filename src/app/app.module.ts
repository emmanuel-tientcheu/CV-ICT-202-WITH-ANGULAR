import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnterNameDirective } from './enter-name.directive';
import { HttpClientModule } from '@angular/common/http';
import { DasBordComponent } from './das-bord/das-bord.component';
import { BtnChangeColorDirective } from './btn-change-color.directive';
import { HearderAppComponent } from './hearder-app/hearder-app.component';
import { ProfilComponent } from './profil/profil.component';
import { AllComponent } from './all/all.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AboutInformationComponent } from './about-information/about-information.component';
import { CompetenceComponent } from './competence/competence.component';
import { DisplayAddDirective } from './display-add.directive';
import { ExperienceComponent } from './experience/experience.component';
import { BioagraphieComponent } from './bioagraphie/bioagraphie.component'

@NgModule({
  declarations: [
    AppComponent,
    EnterNameDirective,
    DasBordComponent,
    BtnChangeColorDirective,
    HearderAppComponent,
    ProfilComponent,
    AllComponent,
    ProfileUserComponent,
    AboutInformationComponent,
    CompetenceComponent,
    DisplayAddDirective,
    ExperienceComponent,
    BioagraphieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
