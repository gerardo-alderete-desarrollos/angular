"use strict";
// no recomendado
var miVariable;
miVariable = 5;
miVariable = 'hola mundo';
miVariable = true;
//----------------------------
var PI = 3.14;
// PI = 3.15;
var persona = {
    nombre: 'Luis',
    curso: 'Angular'
};
var PERSONA = {
    nombre: 'Luis',
    curso: 'Angular'
};
/*
PERSONA = {
    nombre: 'gererdo',
    curso: 'javascript'
}
 */
console.log("PERSONA: " + JSON.stringify(PERSONA));
// Mutación del objeto (se puede)
PERSONA.nombre = 'gerardo';
PERSONA.curso = 'JAVASCRIPT';
console.log("PERSONA: " + JSON.stringify(PERSONA));
//FUNCION (RETORNA ALGO)
function holaMundo() {
    return 'Hola mundo';
}
//PROCEDIMIENTO (NO RETORNA NADA)
function saludar(mensaje) {
    console.log('saludo', mensaje);
}
saludar('Me gusta TypeScript');
var saludarJavascript = function (mensaje) {
    console.log("Saludar " + mensaje);
};
saludarJavascript('Hola con arrayfunctions');
