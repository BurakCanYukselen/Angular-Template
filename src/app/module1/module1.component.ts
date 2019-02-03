import { Component, OnInit } from '@angular/core';
import { Countries } from '../_models/CountriesModel';
import { CountriesService } from '../_service/countries.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {
  constructor(private _counties: CountriesService) { }

  public countries: Countries = { list: [] };

  ngOnInit(): void {
    this._counties.CountriesSource.subscribe(source => this.countries = source);
  }
}
