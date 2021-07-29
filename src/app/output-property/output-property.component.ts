import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //, outputs:['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  //PEGAR O VALOR DIRETO DO CAMPO PELO ViewChild
  @ViewChild('campoInput',{static:true}) campoValorInput! : ElementRef ;

  
  incrementa() {
    this.campoValorInput.nativeElement.value++;
    console.log(this.campoValorInput.nativeElement.value);
    //this.campoValorInput ;
    //this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
