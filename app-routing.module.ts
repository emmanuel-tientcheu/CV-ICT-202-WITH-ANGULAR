import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { CompetencesComponent } from './home/competences/competences.component';
import { CursusComponent } from './home/cursus/cursus.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { HobbyComponent } from './home/hobby/hobby.component';
import { LanguageComponent } from './home/language/language.component';
import { CertificationComponent } from './home/certification/certification.component';
import { AllCvComponent } from './all-cv/all-cv.component';
import { LinksComponent } from './home/links/links.component';
import { Template1Component } from './all-cv/template/template1/template1.component';
import { Template2Component } from './all-cv/template/template/template2/template2.component';
import { Template3Component } from './all-cv/template/template/template3/template3.component';
import { Template4Component } from './all-cv/template/template/template4/template4.component';
import { Template5Component } from './all-cv/template/template/template5/template5.component';
import { Template6Component } from './all-cv/template/template/template6/template6.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'home',
    component: HomeComponent,

      children : [
        {path: 'aboutme', component: AboutmeComponent},
        {path: 'competences', component: CompetencesComponent},
        {path: 'cursus', component: CursusComponent},
        {path: 'experience', component: ExperienceComponent},
        {path: 'hobby', component: HobbyComponent},
        {path: 'langauge', component: LanguageComponent},
        {path: 'certification', component: CertificationComponent},
        {path: 'link', component: LinksComponent},
      ]
    },
    {path: 'all-cv', component: AllCvComponent,
       children : [
        {path: 'temp1', component: Template1Component},
        {path: 'temp2', component: Template2Component},
        {path: 'temp3', component: Template3Component},
        {path: 'temp4', component: Template4Component},
        {path: 'temp5', component: Template5Component},
        {path: 'temp6', component: Template6Component},
       ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
