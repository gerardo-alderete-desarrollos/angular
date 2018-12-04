//Arreglos
let arregloA:number[] = [1,2,3,4,5];
console.log('Arregloa: ', arregloA);

let arregloB: Array<string>;
arregloB = [ 'asdf', 'gerardo'];
console.log('arreglob: ' + arregloB);

//TypeScrips Enums
enum DiaCurso { MARTES, VIERNES };
enum DiasSemana { LUNES, MARTES, MIERCOLES, JUEVES, VIERNES };

let primerDia: DiaCurso;
primerDia = DiaCurso.MARTES;
console.log('pirmerdia ' , primerDia)
console.log('pirmerdia(string) ' , DiaCurso[0]);
console.log('pirmerdia(string) ' , DiaCurso[primerDia]);
console.log('pirmerdia(string) ' , DiaCurso[DiaCurso.MARTES]);





