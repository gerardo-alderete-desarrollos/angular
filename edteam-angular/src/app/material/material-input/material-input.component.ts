import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {
  usuario = {
    nombre: "Luis"
  };

  placeholder = {
    nombre: 'Nombre'
  }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = "Juan"
    }, 3000)
  }

  onKeyUp($event){
    console.log('keyup: ' + $event);
  }

  onBlur($event: FocusEvent){
    console.log($event);
  }
}
