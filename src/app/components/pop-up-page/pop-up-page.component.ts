import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {PopupInterface} from "../../api-models/api-models";

@Component({
  selector: 'app-pop-up-page',
  templateUrl: './pop-up-page.component.html',
  styleUrls: ['./pop-up-page.component.css']
})
export class PopUpPageComponent implements OnInit {
  cityTemperature: number;

  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: PopupInterface) {
  }

  ngOnInit() {
    this.showTemperature();
  }

  // not creating an interface for openweathermap intentionally
  showTemperature() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=40f6b4cc70ee9c6ee2ba170cd1e2797a'
    ).subscribe((t:any) => {
      this.cityTemperature = t.main.temp;
    })
  }



}
