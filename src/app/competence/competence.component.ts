import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { competance } from '../competanceStructure';
import {  DbServiceInformation } from '../services/db.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  @Output() onAddSkill:EventEmitter<competance> = new EventEmitter();

  competance:competance[]=[];
  display:string = 'hidden';
  top:string = '-550px';
  id : number = 3 ;
  nom:string = " ";
  pourcentage:string = " ";



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

  deleteCompetance(competance:competance){
    this.dbCompetance.deleteCompetance(competance)
    .subscribe(()=>(this.competance = this.competance.filter((c)=>c.id!==competance.id
    )))
  }

  addSkill(){
    var id:number=3;
    id = this.id;
    const newSkill = {
      id : id+1,
      nom : this.nom,
      evolution : this.pourcentage
    }
    
    if(this.id==this.id){
      this.id = this.id+2;
    }
    this.dbCompetance.addSkillService(newSkill).subscribe((newSkill)=>(this.competance.push(newSkill)));
    this.onAddSkill.emit(newSkill); 
    this.nom=" ";
    this.pourcentage=" ";
    console.log(id);
  } 

  addSkillTest(){
     console.log("text")
  }
}
