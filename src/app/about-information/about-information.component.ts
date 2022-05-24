import { Component, OnInit } from '@angular/core';
import { information } from '../informationStructure';
import { DbServiceInformation } from '../services/db.service';

@Component({
  selector: 'app-about-information',
  templateUrl: './about-information.component.html',
  styleUrls: ['./about-information.component.scss']
})
export class AboutInformationComponent implements OnInit {

  
  information : information[] = []
  nom : string ;
  prenom : string ;
  image : string ;
  color : string ="#4A63E7";
   
  constructor(private dbServiceinformation:DbServiceInformation ) { }

  ngOnInit(): void {
    this.dbServiceinformation.getInformationDb().subscribe((res)=>{
      this.information = <information[]>res;
      this.nom = this.information[0].nom;
      this.prenom = this.information[0].nom;
      this.image = this.information[0].image;
    });
  }

}
