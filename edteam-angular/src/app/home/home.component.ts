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
  constructor(private nasaApi: NasaApiService) {


   }
 
  ngOnInit() {
    this.nasaApi.getApod()
      .subscribe((data: Apod) => {
        this.apod = data;
      });
  }

}
