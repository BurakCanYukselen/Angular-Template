import { Component, OnInit } from '@angular/core';
import { CountriesService } from './_service/countries.service';
import { Countries } from './_models/CountriesModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _counties: CountriesService) { }

  ngOnInit(): void {
    this._counties.getCountries();
  }
}
