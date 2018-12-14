import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000'
const API_KEY = 'DEMO_KEY';
@Injectable()
export class NasaApiService {

  constructor(private http:HttpClient) { }

  getApod(): Observable<Apod>{
    
    
    // return this.http.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
    return this.http.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);

  }

  getMarsImages(camera: string): Observable<any> {
    return this.http.get(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`);
  }

}
