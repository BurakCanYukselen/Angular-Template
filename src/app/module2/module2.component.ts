import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../_service/countries.service';
import { Countries } from '../_models/CountriesModel';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss']
})
export class Module2Component implements OnInit {
  constructor(private _countries: CountriesService) { }

  public countries: Countries = { list: [] };

  ngOnInit() {
    this._countries.CountriesSource.subscribe(source => this.countries = source);
  }

}
