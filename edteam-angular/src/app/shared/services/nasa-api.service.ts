import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable()
export class NasaApiService {

  private readonly DATA: Apod = {
      date: "",
      explanation: "",
      hdurl: "",
      media_type: "",
      service_version: "",
      title: "",
      url: ""
  }
  constructor() { }

  getApod(): Apod{
    return this.DATA;
  }

}
