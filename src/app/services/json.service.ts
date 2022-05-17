import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Structure} from '../interfaceStructure';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  api : string = "  http://localhost:5000/all";
  constructor( private http: HttpClient) { }

  get():Observable<Structure> {
    return this.http.get<Structure>(this.api);
  }
}
