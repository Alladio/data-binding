import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  // styles:[
  //   `
  //   .highlight{
  //     background-color: yellow;
  //     font-weight: bold;
  // }
  // `
  //]
})
export class DataBindingComponent implements OnInit {

  url: string = "https://pajeh.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/nature/";

  valorAtual:  string ="";

  valorSalvo: string ="" ;

  isMouseOver: boolean= false;

  valorInicial =15;

  // nome:string="abcd";

  // pessoa: any = {
  //   nome: 'Alladio',
  //   idade: 32
  // }

  nomeDoCurso:string="Angular";

  botaoClicado(){
    alert("Clicou!");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){

    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver =!this.isMouseOver;
  }

  onMudouValor(evento: any){
    //console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
