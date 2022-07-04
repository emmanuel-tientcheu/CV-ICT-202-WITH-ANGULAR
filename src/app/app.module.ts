import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { CompetencesComponent } from './home/competences/competences.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { CursusComponent } from './home/cursus/cursus.component';
import { HobbyComponent } from './home/hobby/hobby.component';
import { LanguageComponent } from './home/language/language.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CertificationComponent } from './home/certification/certification.component';
import { LinksComponent } from './home/links/links.component';
import { AllCvComponent } from './all-cv/all-cv.component';
import { Template1Component } from './all-cv/template/template1/template1.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AboutmeComponent,
    CompetencesComponent,
    ExperienceComponent,
    CursusComponent,
    HobbyComponent,
    LanguageComponent,
    CertificationComponent,
    LinksComponent,
    AllCvComponent,
    Template1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    QRCodeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
