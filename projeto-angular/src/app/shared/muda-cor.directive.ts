import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMudaCor]'
})
export class MudaCorDirective implements OnInit {
  @Input()
  corTexto: string;

  constructor(private element:ElementRef) { }

  ngOnInit():void{
    this.element.nativeElement.style.color = this.corTexto;
  }
}
