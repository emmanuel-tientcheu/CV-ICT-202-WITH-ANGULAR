import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';
import { LocalStorageService } from './services/local-storage.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class appComponent implements OnInit {

  storageName: any;
  storageObject: any;
  obj: any;
  elt:any;
  imagescr: any;

 mycvdata =
{
    "name": "AMBASSIRA AMBASSIRA RYAN CRAIG",
    "image":"monimg",

    "adresse":{
        "tel": "+237 658171712",
        "mail": "ambassiraambassira@gmail.com",
        "ville": " Nkolbisson yaoundé"
    },

    "aboutme":
    {
      "title":"About Me",
      "text":"I am a talented ambitious and hardworking individual with broad skills and experience in digital and printed marketing social media and leading projects Furthermore I am adept at handling multiple tasks on a daily basis competently and at working well under pressure A key strength is communication; building strong relationships with people in order to deliver the best results Recently I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager",
    },

    "loisir":
    {
      "title" : "Hobbies",
      "loisir_itself" :
      [
        "football",
        "basketball",
      ],
    },

    "lang_spoken":
    {
      "title":"Languages",
      "lang_itself":
     [
        "english",
        "french",
     ],
    },

    "cursus":
    {
      "title":"Educational Background",
      "curcus_itself":
    [
      {
        "titre": "LICENCE 2 ICT4D",
        "ecole": "universite de yaounde 1",
        "periode": "2020-present"
      },

      {
        "titre": "GCE Advanced Level/ GCE Ordinary Level",
        "ecole": "saint benedict catholic college",
        "periode": "2013-2020"
      },

      {
        "titre": "First School Leaving Certificate",
        "ecole": "Holy Infant School Melen",
        "periode": "2004-2013"
      },
    ],
  },

    "experience":
    {
      "title":"Experience",
      "exp_itself":
     [
        "2 months internship at orange cameroon",
        "3 months internship at Tagus drone Yaounde",
     ],
    },

    "competences":
    {
      "title":"Competences",
      "comp_itself":
     [
        {
            "title":"Web Development",
            "percentage":90,
        },

        {
            "title":"Object Oriented Programming",
            "percentage":80,
        },

        {
            "title":"Creativity",
            "percentage":70,
        },
     ],
    },
}

 ngOnInit(): void {
   this.display();
   this.add();

   this.imagescr = "assets/images/mypic.jpg";
 }

  display()
  {
    this.storageName = localStorage.getItem('cv-data');
    this.storageObject = JSON.parse(this.storageName);
  }

  add()
  {
    localStorage.setItem("cv-data",JSON.stringify(this.mycvdata));
  }

}





