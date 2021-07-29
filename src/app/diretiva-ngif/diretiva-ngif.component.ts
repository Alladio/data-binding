import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos : string []=["Angular2","JavaScript"];

  mostrarCursos : boolean = true;

  mostrarCursosChange(){
    if(this.mostrarCursos == true){
      this.mostrarCursos= false;

    }else{
      this.mostrarCursos = true;
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
