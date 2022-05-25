import { Component, OnInit } from '@angular/core';
import { DbServiceInformation } from '../services/db.service';
import { db } from '../dbStructure';
import { information } from '../informationStructure';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-hearder-app',
  templateUrl: './hearder-app.component.html',
  styleUrls: ['./hearder-app.component.scss']
})
export class HearderAppComponent implements OnInit {

  information : information[] = []
  nom : string ;
  color : string ="#4A63E7";
  constructor(private dbServiceinformation:DbServiceInformation) { }

  ngOnInit(): void {
    this.dbServiceinformation.getInformationDb().subscribe((res)=>{
      this.information = <information[]>res;
      this.nom = this.information[0].nom;
      
    });
    
  }
  changeColor(){
    this.color = "#2F2F2F";
  }

}
