import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appBtnChangeColor]'
})
export class BtnChangeColorDirective {

  constructor(private el : ElementRef) { 
    
  this.setBackGroung('#2F2F2F')
  }
  @HostListener('mouseenter')onMouseEnter(){
    this.setBackGroung('orange');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBackGroung('#2F2F2F');
   }

  setBackGroung(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
