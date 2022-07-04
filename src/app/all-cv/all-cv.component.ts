import { Component,ElementRef, OnInit,ViewChild } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
}
