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
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = "Juan"
    }, 3000)
  }

}
