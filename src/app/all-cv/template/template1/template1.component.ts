import { Component,ElementRef, OnInit,ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})

export class Template1Component implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  changefont(font: string)
  {
   const node = document.getElementById('TRUC') as HTMLInputElement
   node.style.fontFamily = font
  }

  public captureScreen() {
    const filename = 'rtgs-form.pdf';
    const node = document.getElementById('TRUC') as HTMLInputElement
    htmlToImage.toPng(node)
    .then( (dataUrl) => {
    const img = new Image();
    img.src = dataUrl;
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.setLineWidth(1);
    pdf.addImage(img, 'JPEG', 0, 0, 215, 300);
    pdf.save(filename);
  })
  .catch((error) => {
  console.error('oops, something went wrong!', error);
  });
}


}
