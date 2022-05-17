import { Component,OnInit} from '@angular/core';
import {JsonService} from './services/json.service';

import{Competance} from './interfaceCompetence';
import { Experience } from './interfaceExperience';
import {Formation} from './interfaceFormation';
import {Biographie} from './interfaceBiographie';

import {Structure} from './interfaceStructure';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-cv202WithAngular';
  structure : Structure;
  nom : string ;
  

  constructor(private data:JsonService){

  }

  async ngOnInit(){
   this.data.get().subscribe(data => {
     console.log(data);
     this.nom = data.nom;
    });
   console.log("bonjour")
    
  }

}
