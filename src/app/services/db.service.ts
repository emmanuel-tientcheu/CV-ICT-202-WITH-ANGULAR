import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs'; 
import { db } from '../dbStructure'

export class connectDb{

}

@Injectable({
  providedIn: 'root'
})

export class DbServiceInformation{
  
  private Url = 'http://localhost:5000/information';
  constructor(private http:HttpClient) { }

  getInformationDb(){
    return this.http.get(this.Url);
  }
}
