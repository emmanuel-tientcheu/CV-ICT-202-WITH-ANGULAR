import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {TranslateService} from "@ngx-translate/core";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  dofb!: Date;
  dob!: any;
  dateisok : boolean = false;
  today = new Date();
  maxdob = new Date("2004-12-31")
  s!:any;
  s1!:any;
  s2!:any;

  pipe = new DatePipe('en-US');

  constructor(
    public service :AppComponent,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private translate:TranslateService
    ) { }

  ngOnInit(): void {
  }

  SendDataonChange(event: any)
  {
    this.dofb = event.target.value;
    this.dofb = new Date(this.dofb);
    this.dob = this.pipe.transform(this.dofb, 'dd/MM/yyyy');

    if (this.today.getTime() <= this.dofb.getTime())
    {
      this.s = this.translate.instant("alerts.alert1")
       alert(this.s);
    }
    else
    this.dateisok = true;

    if(this.dofb.getTime() > this.maxdob.getTime() && this.dofb.getTime() <= this.today.getTime())
    {
      this.s1 = this.translate.instant("alerts.alert2")
      alert(this.s1);
    }
    else
    this.dateisok = true;

  }
  save()
  {
    const email = document.getElementById("userEmail") as HTMLInputElement
    const pwd = document.getElementById("userPwd") as HTMLInputElement
    const pwd1 = document.getElementById("userPwd1") as HTMLInputElement
    const name = document.getElementById("name") as HTMLInputElement
    const prenom = document.getElementById("surname") as HTMLInputElement

    if(this.dateisok == false)
      {
        this.s2 = this.translate.instant("alerts.alert3")
        alert(this.s2);
      }
      else{
          if(pwd.value == pwd1.value)
           {
             this.afAuth
             .createUserWithEmailAndPassword(email.value, pwd.value).then((result) => {
             this.service.SetUserData(result.user,pwd.value,name.value,prenom.value,this.dob)
           })
          .catch((error) => {
             window.alert(error.message);
           });
            }
    else
    {
      alert("Please enter the same password");
    }
  }
}
}
