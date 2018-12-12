import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apod: Apod;
  constructor() { }

  ngOnInit() {
    this.apod = {
      date: "",
      explanation: "",
      hdurl: "",
      media_type: "",
      service_version: "",
      title: "",
      url: ""
    }
  }

}
