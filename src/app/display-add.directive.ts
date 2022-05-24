import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplayAdd]'
})
export class DisplayAddDirective {

  constructor(private el : ElementRef) {
    //el.nativeElement.style.zIndex = 2 ;
   
    this.setTop("35px")
   }



    setTop(top:string){
      this.el.nativeElement.style.top = top;
      this.el.nativeElement.style.position ="absolute";
    }
}


/* style="visibility:{{display}}" */