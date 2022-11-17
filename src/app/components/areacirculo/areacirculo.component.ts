import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areacirculo',
  templateUrl: './areacirculo.component.html',
  styleUrls: ['./areacirculo.component.css']
})
export class AreacirculoComponent implements OnInit {

  radioCirculo:number = 0;
  resultadoArea:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calcularAreaCirculo(){
    this.resultadoArea = Math.PI * (this.radioCirculo * this.radioCirculo);
  }
}
