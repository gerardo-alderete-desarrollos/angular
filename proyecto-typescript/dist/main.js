"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./modelo/animal/gato");
var gato;
gato = new gato_1.Gato('garfiel', 'Mongol');
console.log('gato: ', gato);
gato.desplazar();
//Conversion de tipo (Cating)
gato.ronronear();
//Set nombre
gato.nombre = 'Tom';
//Get nombre
console.log(gato.nombre);
gato.ronronear();
