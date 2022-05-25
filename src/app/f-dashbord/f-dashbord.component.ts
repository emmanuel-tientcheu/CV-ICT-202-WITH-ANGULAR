import { Component, OnInit } from '@angular/core';
import { DbServiceInformation } from '../services/db.service';
import { db } from '../dbStructure';
import { information } from '../informationStructure';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-f-dashbord',
  templateUrl: './f-dashbord.component.html',
  styleUrls: ['./f-dashbord.component.scss']
})
export class FDashbordComponent implements OnInit {

 
  information : information[] = []
  nom : string ;
  prenom : string ;
  image : string ;
  fatimes = faTimes;
  color : string ="#4A63E7";
   
  constructor(private dbServiceinformation:DbServiceInformation , private router : Router) { }
  
  ngOnInit(): void {
      this.dbServiceinformation.getInformationDb().subscribe((res)=>{
      this.information = <information[]>res;
      this.nom = this.information[0].nom;
      this.prenom = this.information[0].nom;
      this.image = this.information[0].image;
    });
  }

  goToAbout(){
    this.router.navigate(['/about']);
  }

  gotoSkill(){
    this.router.navigate(['/competance']);
  }

  goToExperiance(){
    this.router.navigate(['/experiance']);
  }

  goToBiographie(){
    this.router.navigate(['/biographie']);
  }
 
}
