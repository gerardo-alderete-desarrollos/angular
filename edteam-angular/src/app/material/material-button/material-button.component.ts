import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.scss']
})
export class MaterialButtonComponent implements OnInit {

  formulario = {
    valido: true
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formulario.valido = false;
    }, 5000);
  }

  onClick(e){
    console.log('Evento de click');
    console.log(e);
  }

}
