// no recomendado
let miVariable:any;

miVariable = 5;
miVariable = 'hola mundo';
miVariable = true;

//----------------------------
const PI = 3.14;
// PI = 3.15;

let persona:any = {
    nombre: 'Luis',
    curso: 'Angular'

}

const PERSONA:any = {
    nombre: 'Luis',
    curso: 'Angular'

}

/* 
PERSONA = {
    nombre: 'gererdo',
    curso: 'javascript'
}
 */

console.log(`PERSONA: ${JSON.stringify( PERSONA)}`);

// Mutación del objeto (se puede)
PERSONA.nombre = 'gerardo';
PERSONA.curso = 'JAVASCRIPT';

console.log(`PERSONA: ${JSON.stringify(PERSONA)}`);

//FUNCION (RETORNA ALGO)
function holaMundo(): string {
    return 'Hola mundo';
}

//PROCEDIMIENTO (NO RETORNA NADA)
function saludar(mensaje: string): void {
    console.log('saludo', mensaje);
}

saludar('Me gusta TypeScript');

const saludarJavascript = (mensaje:string):void =>{
    console.log(`Saludar ${mensaje}`);
}

saludarJavascript('Hola con arrayfunctions');