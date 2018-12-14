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
  cameras: string[] = ['MAST', 'CHEMCAM', 'NAVCAM'];
  currentCamera: string;
  
  // Inyeccion de Dependencias
  constructor(private servicio: NasaApiService ) { }

  ngOnInit() {
    this.currentCamera = this.cameras[0];
    this.refreshView(this.currentCamera);
  }

  onSelectCamera(camera: string) {
    this.refreshView(camera);

  }

  private refreshView(camera: string){
    this.servicio.getMarsImages(camera)
    .subscribe(result => {
      console.log(result.photos);
      this.marsImages = result.photos;
    });
  }

}
