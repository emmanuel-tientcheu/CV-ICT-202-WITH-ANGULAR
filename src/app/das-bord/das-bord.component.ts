import { Component, OnInit } from '@angular/core';
import { DbServiceInformation } from '../services/db.service';
import { db } from '../dbStructure';
import { information } from '../informationStructure';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-das-bord',
  templateUrl: './das-bord.component.html',
  styleUrls: ['./das-bord.component.scss']
})
export class DasBordComponent implements OnInit {

  information : information[] = []
  nom : string ;
  prenom : string ;
  image : string ;
  fatimes = faTimes;
   
  constructor(private dbServiceinformation:DbServiceInformation) { }
  
  ngOnInit(): void {
      this.dbServiceinformation.getInformationDb().subscribe((res)=>{
      this.information = <information[]>res;
      this.nom = this.information[0].nom;
      this.prenom = this.information[0].nom;
      this.image = this.information[0].image;
    });
  }
 
}
