import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { QRCodeModule } from 'angular2-qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userState: any;
  userinfo: any;

  constructor(public service :AppComponent,public afs :AngularFirestore) {
    this.userState = JSON.parse(localStorage.getItem('userinfo') || '{}');
  }

  ngOnInit(): void {
  }

  changetoinput()
  {
    const el = document.getElementById('toggle');

    const btn = document.getElementById('input');

    if (el != null && btn != null) {
          el.style.display = 'none';
          btn.style.display = 'block';
    }
  }

  setvalfrominput()
  {
    const input = document.getElementById('nameinput') as HTMLInputElement
    const btn = document.getElementById('input');
    const el = document.getElementById('toggle');

    if(input.value.length == 0)
    {
      if (el != null && btn != null)
      {
        el.style.display = 'block';
        btn.style.display = 'none'
      }
    }
    else{
      var text = input.value;

      if (el != null && btn != null) {
          btn.style.display = 'none';
          el.style.display = 'block';
          el.innerHTML = text;

          this.userState.nom = text;
          localStorage.setItem('userinfo', JSON.stringify(this.userState));
          this.afs.collection('nusers').doc(this.userState.id).collection('informations').doc(this.userState.id).update({ nom: text});
       }
    }
  }
}
