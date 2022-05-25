import { Component, OnInit } from '@angular/core';
import { experience } from '../experienceStructure';
import {  DbServiceInformation } from '../services/db.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience:experience[]=[];
  display:string = 'hidden';
  top:string = '-550px';

  id:number = 4;
  titre:string = " ";
  periode:string = " ";
  detail:string = " ";
  
  constructor(private dbExperiance:DbServiceInformation) { }

  ngOnInit(): void {

    this.dbExperiance.getExperience().subscribe((res)=>{
      this.experience = <experience[]>res;
      console.table(this.experience);
      console.log(this.experience);
    })
  }

  addInformation(){
    this.display="visible";
    this.top="10px"
  }

  deleteKill(skill:experience){
    this.dbExperiance.deleteExperience(skill)
    .subscribe(()=>(this.experience = this.experience.filter((e)=>e.id!==skill.id)))
  }

  addExperience(){

    const newExperiance ={
      id:this.id,
      titre:this.titre,
      periode:this.periode,
      detail:this.detail
    }
    if(this.id==this.id){
      this.id = this.id+2;
    }
   this.dbExperiance.addExperienceService(newExperiance).subscribe((newExperiance)=>( this.experience.push(newExperiance)))
  }
  

  close(){
  
    this.top="-550px"
  }

  
}
