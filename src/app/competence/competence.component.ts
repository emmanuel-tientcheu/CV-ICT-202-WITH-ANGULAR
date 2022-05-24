import { Component, OnInit } from '@angular/core';
import { competance } from '../competanceStructure';
import {  DbServiceInformation } from '../services/db.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  competance:competance[]=[];
  display:string = 'hidden';
  top:string = '-550px';

  constructor(private dbCompetance:DbServiceInformation) { }

  ngOnInit(): void {
    this.dbCompetance.getInformationCompetance().subscribe((res)=>{
      this.competance = <competance[]>res;
      console.table(this.competance);
      console.log(this.competance[0].nom);
    })
  }

  addInformation(){
    this.display="visible";
    this.top="10px"
  }
  close(){
  
    this.top="-550px"
  }
}
