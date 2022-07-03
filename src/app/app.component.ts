import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userState: any;
  docref: any;
  public userdata: any;
  userid: null | undefined;
  userinfo: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private translate:TranslateService
  )
  {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(async (result) => {
      if(result.user)
      {
          this.getUserData(result.user.uid);
      }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password).then((result) => {
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SetUserData(user: firebase.User | null,password: string,name: string,prenom:string,dateNis: string) {
    if(user)
    {
           this.afs.collection('nusers').doc(user.uid).collection('informations').doc(user.uid).set({
            id:user.uid,
            email:user.email,
            password:password,
            nom:name,
            prenom:prenom,
            dateNaissance:dateNis,
            photo:"",
            biographie:"",
            lieuNaissance:"",
            profession:"",
            address:""
        }).then(
            res => {
            console.log(res);
            //this.form.reset();

            /****************getting user data*********************/
            this.afs.collection('nusers').doc(user.uid).collection('informations', ref => ref.where('id', '==', user.uid)).get()
            .subscribe((userinfo: { docs: any[]; }) =>{
            if (userinfo.docs.length === 0) {
                alert('User data not found! Try again!');
                this.userdata = null;
              } else {
                userinfo.docs.forEach((doc: { data: () => any; }) => {
                 this.userdata = doc.data();
                 this.userinfo =  this.setdatatolocalstorage(this.userdata)
                 this.router.navigate(['./home']);
                 alert("SGNUP  SUCCESSFULLY")
                  })
                }
                })
                 /************************************************* */
                 })
                .catch(e => {
                   console.log(e);
                   })
     }
  }


  getUserData(userid: string)
  {
   this.afs.collection('nusers').doc(userid).collection('informations', ref => ref.where('id', '==', userid)).get()
     .subscribe((userinfo: { docs: any[]; }) =>{
        if(userinfo.docs.length === 0){
           alert('User data not found! Try again!');
            this.userdata = null;
        }else{
            userinfo.docs.forEach((doc: { data: () => any; }) => {
            this.userdata = doc.data();
            this.userinfo =  this.setdatatolocalstorage(this.userdata)
            alert("LOGGED IN SUCCESSFULLY")
            this.router.navigate(['./home']);
              })
             }
            })
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('userinfo');
      this.router.navigate(['sign-in']);
    });
  }

  setdatatolocalstorage(userd: any)
  {
    localStorage.setItem('userinfo', JSON.stringify(userd));
    const userobj =  JSON.parse(localStorage.getItem('userinfo') || '{}');
    return userobj;
  }
}
