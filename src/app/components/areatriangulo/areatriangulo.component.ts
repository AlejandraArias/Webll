import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areatriangulo',
  templateUrl: './areatriangulo.component.html',
  styleUrls: ['./areatriangulo.component.css']
})
export class AreatrianguloComponent implements OnInit {
  
  base : number = 0;
  altura : number = 0;
  area : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calcularAreaTriangulo(){
    this.area = this.base * this.altura;
  }

}
