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
    {path: 'all-cv', component: AllCvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
