import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { HttpClient } from '@angular/common/http';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'ed-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {
  marsImages: MarsImage[];
  
  // Inyeccion de Dependencias
  constructor(private servicio: NasaApiService ) { }

  ngOnInit() {
    this.servicio.getMarsImages('CHEMCAM')
      .subscribe(result => {
        console.log(result.photos);
        this.marsImages = result.photos;
      });
  }

}
