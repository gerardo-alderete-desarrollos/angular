import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  estudiante: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  listaEstudiantes: Estudiante[];

  readonly DEFAULT_PICTURE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAgVBMVEX///8KME4AKUkALUwAJkcAJUcAI0YAIUQAH0MAHUIAGUD5+vvq7fAAFz8ABTgAFT4AETxNZXrS2N3x9Pa4wck/VmzN0NXb4eXj5+snRV+jrriUoq6vucIAM1J5iZhYbYA1TmaElKJoe4zBydAbOlZhcIA1VW6epq9NX3ITP1xyfYt1fJZ9AAAHmklEQVR4nO1c2ZaqOhA9VoUwepRZBhm11f7/D7wg2ooGqCB9nu5+6IdeEncqNVfwz5//8QksJ6jjsspz+3Lx8zwvEy9wdv/w+73s6F9A1zkDAMTmD3DNgIN/zOJ/wCP0sstWV5pvXr2hIaNoWzymjvl7BKwkj1Qm+PYeE6YdzsnviMP1Kl2DCQJ3gaiGnS5Ow0p8YJTvvwOUqAyXZLAr9xpJAj1p8HVWL8XAyiIuzeAKBY/OEgzcZD+TQQumlZ/rhVd8wODK4hC7HzHYfaufMWiAhv3JgaQH5VMGLQDLuV7LzfSPhdABeT5PK5yIL8OgBTukMyjUB1iOQiMK5STLwEy2C53DDwm9krSPTMox06AfZUi4ubE8hdWK7y06B3sRk3wHO1NJuLb2OxQaElRJ2L+gCz8kzhRHYWb671FoSEQEl1ku6JlE4NMmmm5/l0JjotkEhWC/sGsSgI+7beuyqIMWAzEYoWBWUo4BFEXVpnJ90XPFiEokMo4BNkWWJaeqMHQmKT1lWCWcFX1PiPatnDKttPIlc059SCXMnO6ctKiXtrtBdtlInApEA/4yJjsnVMv3E62ziL4HLj6N3YG6D2TifCQs12QWmtA2MqpNIPMGTvNPmFO1GnyBbTi0erZ9PB6i0Fq3Sl1FoJbkaKklwxQalEStwsObIAKqXUIxHvhcqnUZb+KkPomrMUfbYhfRdoOv9ulQ7RLyCQr06P8au8iBYtDDPWAR18Ko91hI9g3GdEJo5sTwsen5WnKwQkoqdiLaZ+9cTaIaNY/ZBA4pUQ54eGoKBOQEjsShpq6mPZlnRXbzJA4BVbuw+HlmV5CjLomDQ9bwvz/tw5qeBpE4eOQtPfy+REmBF4pO0o/2xzLIVtGAU2yTnJZidDsMS6as2RJ81LdETnhzU6lMgWlMt3/dgq5f9wxbqucykT1c5SrRQMGvTnS2THXACHKQqZr/Xh+R8A6NSpaTFOQEu7m660CmOkHKNCCWKNc6d13LqCQMptQzOXSCTaiZ8JU2pdMp00Zh3+0TlZRKVtMUyDlMC8hbpydlFhRf7cosCH7bJLtIVczr6b5aLdNgxaJdUK77w/IpQbhnKcFia5x/ZSg03nXKMmIZHV/hfgYHdcpL0ZOyK2AGB7DHKZhy+rVaB/IcVtp4j9ORbHDO4mCMV1rkNsYnHOA4RsGSiYCzOfQqkzfEsqMPYw6H0fhNr9juuNqFfJNcH75UkMgOHjr/IN8lHw5c1P7HKwfpx5rTGOqKyY+AunghFTdvD4I4cp3W8kv5bbEga9AtwBeVGVIt9/tK1xhIr4qeoAjaUjW5w/m80DWPqmdNEjX7VRLJrFsCnaHPGR8BrBS/pxNmOe+2hn5Vb6n6ooOS53wF/PQjCrO+aCtczdjNtvM1R1nDUG3LOuqI3E+uLNz4jI1gsK7l742su01ITjRRy9voXTJYoWpEuV1sdUDcHpuz2WUgtyHwOw6eVA6qHOIuo3QKYNhe1MPrrbDbf72Cy7C4xx6X7llAuzyU4I93RIMzxg09f9w/MuNiTZ8q8Xv3+4v4CIMi6VmkaaVlVZXerpdru0EVES/XdZ6a6t8QNF551Iscblpxiq0+8qHpniaoh3MicYnjT3vPj6AZj46K649/GLZ+POOql5XaxsSRPHW3xsMWt2dfQQzz0RjyXCeEI/kcKrMvmjUw07Eooj7nISOHMXFTYBLBcI6E0XPIGZ44aJQG1CiGb3X0c8LBuIXCZEUOg+O6dV/Rh+ZZuvQtt3fUA/uDc/9zOzEHvHxOoRGEWNve+muZMHhOFvokpMKgCP6rvQkne+NlHRmmcKZivDdTKoEgXk9sLkQ+EL7e3c5OkIip0w1yEjyBQgg7voJ0arvQbXVBCciEM2v3zUeQBqokvFkGgljTvNeamdKUpeEtQ1GGTvlVddQPQ8UDr02qd7u8w+rbEB6mrjqQ4b6sPHASLfqTrbdLEvPxMiviY/bWs42lvMPbwsrowmbxFONGbrVJI31StZ+h5gDC6CE0wgiPjKe0GZWp1DBY/2gPYZRJxlM4Mqa3Fj8+vJhKPvcMdUooTm62jPvP3h/p456x6hMt9xuy7uMoutE2G7eJgv5NW9TMrkUwHJd85a1UOimQ17wOatmCpnmbeerf9G01ksCVukA6+0AbEHVb6nRjRPQXSeQ6WI2zXssWbJ4GLFoubvoMmXx+7BQqbLJFXISZcGB7yqT8FbujgqxYIHyHR4587sGe9gDap6JwT4oCajbb1zh+s4Mi/sRP1K0mRHPO4Q4zAQbr8+wlnFwF0D8VpZO3ry3b9QxZmLtqz1DxFwi/qW8AbPJU9kTro66gtk8X8fhm7GsArChD+nK7uMBGBpFkM28EbuxvGXDIY1LhZaUZ6o0e4MKvWHvHAwdQVn7iWGPisMLYPoCCfH/+8P1VEZzksm5oqHpRJZ5wg2F9yr54c26Ksc+CX3rZPSj9fasanOHqKy9jz3GcMGz+tL8/8HVA4EpDEvzvxQKNCJYT53yrtb82wLimbzYb3K83G6P7j6Jt9K8k+Be/fxDG2dGP9rqhqgpjDBRV1Q24tD97sGC4n4YVOkGQnMqqQXZqf/0hHNXVEfwHNiWBzk9yiOgAAAAASUVORK5CYII=";

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiante = new ClassEstudiante(1, 'Luis Aviles', 'Cochabamba');
    console.log('Luis estudiante1 : ' + this.estudiante.getEdad());

    this.estudiante2 = {
      id: 2,
      nombre: 'Jorge Perez',
      ciudad: 'Lima',
      fotoURL: 'data:image/jpeg;base64,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'
    }

    this.estudiante3 = {
      id: 3,
      nombre: 'Maria Rodriguez',
      ciudad: 'Bogota',
      fotoURL: 'data:image/jpeg;base64,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'
    }

    this.listaEstudiantes = [this.estudiante, this.estudiante2, this.estudiante3]

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Juana Lopez',
        ciudad: 'Santiago',
        fotoURL: 'data:image/jpeg;base64,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'
      }
    }, 3000);
  }

}
