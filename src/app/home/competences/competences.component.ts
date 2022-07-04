import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore, AngularFirestoreDocument, docChanges } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  array:[] = [];
  userState:any;
  closeResult!: string;
  user:any;
  comp:any;
  constructor(private modalService: NgbModal,public afs: AngularFirestore,private firestore: AngularFirestore) {
    this.userState = JSON.parse(localStorage.getItem('userinfo') || '{}');
    this.comp = JSON.parse(localStorage.getItem('comp') || '{}');

    afs.collection('nusers').doc(this.userState.id).collection('competences').get()
    .subscribe(async (comp: { docs: any[]; }) => {
      if(comp.docs.length === 0)
      {
        afs.collection('nusers').doc(this.userState.id).collection('competences').doc('init')
      }
      else{

      }
    })
  }

  ngOnInit(): void {
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

  addcomp()
  {

  }
}
