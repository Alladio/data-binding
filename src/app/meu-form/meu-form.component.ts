import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  

  nome:string="Digite Seu Nome";

  pessoa: any = {
    nome: 'Alladio',
    idade: 32
  }
  botaoClicado(){
    alert("Clicou!");
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
