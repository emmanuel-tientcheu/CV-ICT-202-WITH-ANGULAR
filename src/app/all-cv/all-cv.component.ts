import { Component,ElementRef, OnInit,ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Template1Component } from './template/template1/template1.component';

@Component({
  selector: 'app-all-cv',
  templateUrl: './all-cv.component.html',
  styleUrls: ['./all-cv.component.scss']
})
export class AllCvComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;
  constructor(public service :AppComponent,public afs :AngularFirestore) { }

  ngOnInit(): void {
  }

  changefont(font:string)
  {
    let temp1 = new Template1Component
     temp1.changefont(font)
  }
}
