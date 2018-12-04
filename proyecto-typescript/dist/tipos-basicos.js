"use strict";
//Arreglos
var arregloA = [1, 2, 3, 4, 5];
console.log('Arregloa: ', arregloA);
var arregloB;
arregloB = ['asdf', 'gerardo'];
console.log('arreglob: ' + arregloB);
//TypeScrips Enums
var DiaCurso;
(function (DiaCurso) {
    DiaCurso[DiaCurso["MARTES"] = 0] = "MARTES";
    DiaCurso[DiaCurso["VIERNES"] = 1] = "VIERNES";
})(DiaCurso || (DiaCurso = {}));
;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["LUNES"] = 0] = "LUNES";
    DiasSemana[DiasSemana["MARTES"] = 1] = "MARTES";
    DiasSemana[DiasSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiasSemana[DiasSemana["JUEVES"] = 3] = "JUEVES";
    DiasSemana[DiasSemana["VIERNES"] = 4] = "VIERNES";
})(DiasSemana || (DiasSemana = {}));
;
var primerDia;
primerDia = DiaCurso.MARTES;
console.log('pirmerdia ', primerDia);
console.log('pirmerdia(string) ', DiaCurso[0]);
console.log('pirmerdia(string) ', DiaCurso[primerDia]);
console.log('pirmerdia(string) ', DiaCurso[DiaCurso.MARTES]);
