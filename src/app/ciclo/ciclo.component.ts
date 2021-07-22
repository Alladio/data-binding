import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
 DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {

  

  @Input () valorInicial : number =10;

  constructor() { 
    console.log("constructor");
  }
 
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
 
  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
}
