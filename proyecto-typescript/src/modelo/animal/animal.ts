export abstract class Animal {
    constructor(protected _nombre: string) {
    }

  /*   setNombre(nombre: string):void {
        this.nombre = nombre;
    }
    getNombre():string{
        return this._nombre;
    } */

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get nombre():string {
        return this._nombre;
    }

    abstract desplazar(): void;
}   