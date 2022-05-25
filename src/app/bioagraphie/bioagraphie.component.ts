import { Component, OnInit } from '@angular/core';
import { biographie } from '../biographieStructure';
import { DbServiceInformation } from '../services/db.service';

@Component({
  selector: 'app-bioagraphie',
  templateUrl: './bioagraphie.component.html',
  styleUrls: ['./bioagraphie.component.scss']
})
export class BioagraphieComponent implements OnInit {

   biographie:biographie[] = [];
   display:string = 'hidden';
   top:string = '-550px';
   poste:string = " ";
   profil:string=" ";
   id:number=4;

  constructor(private dbBiographie:DbServiceInformation) { }

  ngOnInit(): void {

    this.dbBiographie.getBiographie().subscribe((res)=>{
      this.biographie = <biographie[]>res;
      console.table(this.biographie);
      console.log(this.biographie);
    })
  }

  
  deleteBiography(biographie:biographie){
    this.dbBiographie.deleteBiographie(biographie)
    .subscribe(()=>(this.biographie = this.biographie.filter((c)=>c.id!==biographie.id
    )))
  }

  addBiographie(){
    const newBio = {
      id:this.id,
      poste:this.poste,
      profil:this.profil
    }

    if(this.id==this.id){
      this.id = this.id+2;
    }
    this.dbBiographie.addBiography(newBio).subscribe((newBio)=>( this.biographie.push(newBio)));
  }


  addInformation(){
    this.display="visible";
    this.top="10px"
  }

  close(){
  
    this.top="-550px"
  }

  
}
