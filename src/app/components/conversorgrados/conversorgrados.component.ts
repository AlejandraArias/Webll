import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversorgrados',
  templateUrl: './conversorgrados.component.html',
  styleUrls: ['./conversorgrados.component.css']
})
export class ConversorgradosComponent implements OnInit {

  temperaturaGradosCentigrados : number = 0;
  resultadoFarenheit: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  conversorAFarenheit(){
    this.resultadoFarenheit = this.temperaturaGradosCentigrados * 1.8 + 32;
  }

}
