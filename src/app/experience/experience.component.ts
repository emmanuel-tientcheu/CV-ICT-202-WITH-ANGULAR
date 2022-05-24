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

  close(){
  
    this.top="-550px"
  }

}
