import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appBtnChangeColor]'
})
export class BtnChangeColorDirective {

  constructor(private el : ElementRef) { 
    
  this.setBackGroung('#2F2F2F')
  }
  @Input('appBtnChangeColor')color:string;

  @HostListener('window:load')onPageLoad(){
    console.log(this.color);
    this.setBackGroung(this.color);

  }
  @HostListener('click')onclick(){
    this.setBackGroung(this.color);
  }
  

  setBackGroung(color:string){
    this.el.nativeElement.style.backgroundColor = color;
    
  }
}
