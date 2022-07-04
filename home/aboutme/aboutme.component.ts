import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],

  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})

export class AboutmeComponent implements OnInit {
  userState: any;
  userinfo: any;
  array:[] | undefined;
  closeResult!: string;
  user:any;


  constructor(private modalService: NgbModal,public service :AppComponent,public afs :AngularFirestore) {
    this.userState = JSON.parse(localStorage.getItem('userinfo') || '{}');
   }

  ngOnInit(): void {
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.code == 'Enter')
    {
      this.changeval()
    }
  }

  opentextera(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any) {
    throw new Error('Method not implemented.');
  }

  openinput(id :string,id1 :string,type :string,setid: string)
  {
    const input = document.createElement('input');
    input.setAttribute('id',setid);
    input.setAttribute('type',type);
    input.setAttribute('size','40')

    const i = document.getElementById(id);

   i?.appendChild(input);

    const i1 = document.getElementById(id1);
    if(i1 != null)
      i1.style.display = 'none'
  }

 changeval()
{
   const email = document.getElementById('email') as HTMLInputElement
   const nom = document.getElementById('nom') as HTMLInputElement
   const prenom = document.getElementById('prenom') as HTMLInputElement
   const site = document.getElementById('add') as HTMLInputElement
   const ln = document.getElementById('ln') as HTMLInputElement
   const dn = document.getElementById('dn') as HTMLInputElement
   const prof = document.getElementById('pr') as HTMLInputElement

   if(email != null)
   {
    if(email.value != '')
    {
    this.userState.email = email.value;
    localStorage.setItem('userinfo', JSON.stringify(this.userState));
    this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ email: email.value});

    const e1 =document.getElementById('mail1') as HTMLInputElement
    e1.style.display = 'inline'
    email.style.display = 'none'
    }else{
    const e1 =document.getElementById('mail1') as HTMLInputElement
    e1.style.display = 'inline'
    email.style.display = 'none'
   }
  }


   else if(nom != null)
   {
    if(nom.value != '')
    {
    this.userState.nom = nom.value;
    localStorage.setItem('userinfo', JSON.stringify(this.userState));
    this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ nom: nom.value});

    const e1 =document.getElementById('nom1') as HTMLInputElement
    e1.style.display = 'inline'
    nom.style.display = 'none'
   }else{
    const e1 =document.getElementById('nom1') as HTMLInputElement
    e1.style.display = 'inline'
    nom.style.display = 'none'
   }
  }

   else if(prenom != null)
   {
    if(prenom.value != '')
    {
    this.userState.prenom = prenom.value;
    localStorage.setItem('userinfo', JSON.stringify(this.userState));
    this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ prenom: prenom.value});

    const e1 =document.getElementById('prenom1') as HTMLInputElement
    e1.style.display = 'inline'
    prenom.style.display = 'none'
   }else{
    const e1 =document.getElementById('prenom1') as HTMLInputElement
    e1.style.display = 'inline'
    prenom.style.display = 'none'
   }
  }

   else if(site != null)
   {
    if(site.value != '')
    {
    this.userState.address = site.value;
    localStorage.setItem('userinfo', JSON.stringify(this.userState));
    this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ address: site.value});

    const e1 =document.getElementById('add1') as HTMLInputElement
    e1.style.display = 'inline'
    site.style.display = 'none'
   }else{
    const e1 =document.getElementById('add1') as HTMLInputElement
    e1.style.display = 'inline'
    site.style.display = 'none'
   }
  }

  else if(ln != null)
   {
    if(ln.value != '')
    {
    this.userState.lieuNaissance = ln.value;
    localStorage.setItem('userinfo', JSON.stringify(this.userState));
    this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ lieuNaissance: ln.value});

    const e1 =document.getElementById('ln1') as HTMLInputElement
    e1.style.display = 'inline'
    ln.style.display = 'none'
   }else{
    const e1 =document.getElementById('ln1') as HTMLInputElement
    e1.style.display = 'inline'
    ln.style.display = 'none'
   }
  }

   else if(dn != null)
   {
    if(dn.value != '')
    {
    this.userState.dateNaissance = dn.value;
    const text = String(dn.value)
    localStorage.setItem('userinfo', JSON.stringify(this.userState));
    this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ dateNaissance: text });

    const e1 =document.getElementById('dn1') as HTMLInputElement
    e1.style.display = 'inline'
    dn.style.display = 'none'
   }else{
    const e1 =document.getElementById('dn1') as HTMLInputElement
    e1.style.display = 'inline'
    dn.style.display = 'none'
   }
  }

  else if(prof != null)
  {
   if(prof.value != '')
   {
    const text = String(prof.value)
    console.log(prof.value)
   this.userState.profession = prof.value;
   localStorage.setItem('userinfo', JSON.stringify(this.userState));
   this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ profession: prof.value});

   const e1 =document.getElementById('prof1') as HTMLInputElement
   e1.style.display = 'inline'
   prof.style.display = 'none'
  }else{
   const e1 =document.getElementById('prof1') as HTMLInputElement
   e1.style.display = 'inline'
   prof.style.display = 'none'
  }
 }
}

savebio()
{
  const val =document.getElementById('bio') as HTMLInputElement

  if(val != null && val.value != '')
  {
    this.userState.biographie = val.value
    localStorage.setItem('userinfo', JSON.stringify(this.userState));
    this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ biographie: val.value});
  }
}
}


