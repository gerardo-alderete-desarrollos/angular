import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apod: Apod;
  error: string;
  constructor(private nasaApi: NasaApiService) {


   }
 
  ngOnInit() {
    this.nasaApi.getApod()
      .subscribe((data: Apod) => {
        setTimeout(()=> {
          this.apod = data;
        },1500);

      }, error => {
        setTimeout( () => {
          console.log('Error al conectar con el servidor');
          this.error = 'Error al conectar con el servidor';
        }, 2000); 
      });
  }

}
