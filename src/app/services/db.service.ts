import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs'; 
import { db } from '../dbStructure'
import { competance } from '../competanceStructure';
import { experience } from '../experienceStructure';

export class connectDb{

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class DbServiceInformation{
  
  private Url = 'http://localhost:5000/information';
  private UrlCompetance = 'http://localhost:5000/competance';
  private UrlExperiance = 'http://localhost:5000/experience'
  constructor(private http:HttpClient) { }

  getInformationDb(){
    return this.http.get(this.Url);
  }

  getInformationCompetance(){
    return this.http.get(this.UrlCompetance);
  }

  getExperience(){
    return this.http.get(this.UrlExperiance);
  }

  deleteCompetance(competance:competance){
    const url = `${this.UrlCompetance}/${competance.id}`;
    return this.http.delete(url);
  }
  
  deleteExperience(cpt:experience){
    const url = `${this.UrlExperiance}/${cpt.id}`;
    return this.http.delete(url);
  }

  addSkillService(competance:competance){
    return this.http.post<competance>(this.UrlCompetance , competance , httpOptions);
  }

  addExperienceService(cpt:experience){
    return this.http.post<experience>(this.UrlExperiance , cpt , httpOptions)
  }
}


